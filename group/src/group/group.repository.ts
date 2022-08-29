import { Group, PopulatedGroup } from "./group.interface";
import { modelGroup } from "./group.model";
import { Document, ObjectId } from "mongoose";
import { CustomError } from '../utils/CustomError'
export default class GroupRepository {

    static async addGroup(group: Group) {
        const result = await modelGroup.findOne({ nameOfGroup: group.nameOfGroup }).exec();
        const resName = group.nameOfGroup;
        if (!result && resName && typeof (resName) === "string") {
            const grou = new modelGroup({
                nameOfGroup: String(group.nameOfGroup),
                groups: group.groups,
                persons: group.persons
            }).save()
            return grou;
        }
        else {
            throw new CustomError(400, "This group already exists or there was a value entered incorrectly")
        }
    }

    static async readGroup(id: String) {
        return modelGroup.findOne({ _id: id });
    }

    static async readGroupsDb() {
        return await modelGroup.find({});
    }

    static async updateNameGroupRepository(id: string, name: string) {
        return modelGroup.findByIdAndUpdate(id, { "nameOfGroup": name });
    }

    static async deleteGroupRepository(id: string) {

        const deleteGroup: string[] = [];
        deleteGroup.push(id);
        const group: PopulatedGroup & Document | null = await modelGroup.findById(id);
        const arryGroups: any = group?.groups;

        while (0 !== arryGroups.length) {
            for await (const groupId of arryGroups) {
                GroupRepository.deleteGroupRepository(groupId)
                arryGroups.shift();
                deleteGroup.push(groupId);
            }
        }

        await modelGroup.deleteMany({ _id: { $in: deleteGroup } })
        console.log(deleteGroup)
        await Promise.all(deleteGroup.map( async (id) => {
            await modelGroup.findOneAndUpdate({ groups: id }, { $pull: { groups: id } })
        }))

    }

    static async addGroups(group1: string, group2: string) {
        const res = await modelGroup.findOne({ _id: group1, groups: group2 })
        if (res)
            throw new CustomError(400, "The group already includes the target group")

        const result = await modelGroup.findOne({ _id: group1 })
            .populate({
                path: "groups",
                populate: { path: "groups" }
            })

        if (result?.groups.includes(group1))
            throw new CustomError(404, "A group cannot be its own ancestor")

        modelGroup.findOneAndUpdate(
            {
                _id: group1
            },
            {
                $push: { groups: group2 }
            },
            {
                new: true, upsert: true
            }
        ).catch((err) => {
            throw new CustomError(404, "err")
        })

        return await modelGroup.findOne({ _id: group1 })
    }

    static async alreadyContained(group2: string) {
        return await modelGroup.findOne({ groups: group2 })
    }

    static async personDelete(id: string) {
        return await modelGroup.updateOne({ persons: id }, { $pull: { persons: id } });
    }

    static async searchPerson(id: string) {
        const group = await modelGroup.findOne({ _id: id })
        return group?.persons;
    }

    static async addPersonToPersons(id: string, nameOfPerson: string) {
        await modelGroup.findOneAndUpdate(
            {
                _id: id
            },
            {
                $push: { persons: nameOfPerson }
            },
            {
                new: true
            }
        )
    }

    static createGroupsDocuments() {
        const groupA = new modelGroup({ nameOfGroup: "A" }); groupA.save();
        const groupB = new modelGroup({ nameOfGroup: "B" }); groupB.save();
        const groupC = new modelGroup({ nameOfGroup: "C" }); groupC.save();
        const groupD = new modelGroup({ nameOfGroup: "D" }); groupD.save();
        const groupE = new modelGroup({ nameOfGroup: "E" }); groupE.save();
        groupA.groups = [(groupB._id).toString(), (groupE._id).toString()];
        groupB.groups = [(groupC._id).toString()];
        groupC.groups = [(groupD._id).toString()];
    }

}










