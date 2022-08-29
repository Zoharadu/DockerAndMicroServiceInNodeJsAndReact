import { Group } from "./group.interface";
import { modelGroup } from "./group.model"
import { Request } from 'express'
import GroupRepository from "./group.repository"
import { CustomError } from "../utils/CustomError"
export default class GroupManager {

    static async createGroup(req: Request) {
        const group: Group = {
            nameOfGroup: req.body.nameOfGroup,
            groups: req.body.groups,
            persons: req.body.persons
        }
        return await GroupRepository.addGroup(group);
    }

    static async ReadGroup(id: string) {
        const group = await GroupRepository.readGroup(id);
        if (!group)
            throw new CustomError(404, "This group does not exist")
        return group;
    }

    static async readGroups() {
        return await GroupRepository.readGroupsDb();
    }

    static async updateNameGroup(id: string,nameOfGroup:string) {
        const group = await GroupRepository.updateNameGroupRepository(id,nameOfGroup)
        if (!group)
            throw new CustomError(404, "This group does not exist")
        return group;
    }

    static async deleteGroupManger(id: string) {
        return await GroupRepository.deleteGroupRepository(id);
    }

    static async addGroupToArray(id:string,groups:string) {
        const result = await modelGroup.findOne({ _id: id })
        if (result && id !== groups)
            return await GroupRepository.addGroups(Object(id), groups);
        throw new CustomError(404, "This group does not exist or non-standard values")
    }

    static async deletePerson(id: string) {
        return await GroupRepository.personDelete(id)
    }

    static async searchPerson(id: string) {
        const group = await GroupRepository.readGroup(id)
        if (group)
            return GroupRepository.searchPerson(id)
        throw new CustomError(404, 'group not found')
    }

    static async addPersonToPersons(id: string,nameOfPerson:string) {
        const group = await GroupRepository.readGroup(id)
        if (group)
            return GroupRepository.addPersonToPersons(id, nameOfPerson)
        throw new CustomError(404, 'group not found')
    }

    // static async acceptAllGroupOnPerson(req: Request) {
    //     const group = await modelGroup.findById(req.params.id)
    //     if (!group)
    //         throw new CustomError(404, "group not found")
    //     return group;
    // }
}






