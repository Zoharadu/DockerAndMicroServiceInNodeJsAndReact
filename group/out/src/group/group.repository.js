"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const group_model_1 = require("./group.model");
const CustomError_1 = require("../utils/CustomError");
class GroupRepository {
    static addGroup(group) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield group_model_1.modelGroup.findOne({ nameOfGroup: group.nameOfGroup }).exec();
            const resName = group.nameOfGroup;
            if (!result && resName && typeof (resName) === "string") {
                const grou = new group_model_1.modelGroup({
                    nameOfGroup: String(group.nameOfGroup),
                    groups: group.groups,
                    persons: group.persons
                }).save();
                return grou;
            }
            else {
                throw new CustomError_1.CustomError(400, "This group already exists or there was a value entered incorrectly");
            }
        });
    }
    static readGroup(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return group_model_1.modelGroup.findOne({ _id: id });
        });
    }
    static readGroupsDb() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield group_model_1.modelGroup.find({});
        });
    }
    static updateNameGroupRepository(id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            return group_model_1.modelGroup.findByIdAndUpdate(id, { "nameOfGroup": name });
        });
    }
    static deleteGroupRepository(id) {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function* () {
            const deleteGroup = [];
            deleteGroup.push(id);
            const group = yield group_model_1.modelGroup.findById(id);
            const arryGroups = group === null || group === void 0 ? void 0 : group.groups;
            while (0 !== arryGroups.length) {
                try {
                    for (var arryGroups_1 = (e_1 = void 0, __asyncValues(arryGroups)), arryGroups_1_1; arryGroups_1_1 = yield arryGroups_1.next(), !arryGroups_1_1.done;) {
                        const groupId = arryGroups_1_1.value;
                        GroupRepository.deleteGroupRepository(groupId);
                        arryGroups.shift();
                        deleteGroup.push(groupId);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (arryGroups_1_1 && !arryGroups_1_1.done && (_a = arryGroups_1.return)) yield _a.call(arryGroups_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            return group_model_1.modelGroup.deleteMany({ _id: { $in: deleteGroup } });
        });
    }
    static addGroups(group1, group2) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield group_model_1.modelGroup.findOne({ _id: group1, groups: group2 });
            if (res)
                throw new CustomError_1.CustomError(400, "The group already includes the target group");
            const result = yield group_model_1.modelGroup.findOne({ _id: group1 })
                .populate({
                path: "groups",
                populate: { path: "groups" }
            });
            if (result === null || result === void 0 ? void 0 : result.groups.includes(group1))
                throw new CustomError_1.CustomError(404, "A group cannot be its own ancestor");
            group_model_1.modelGroup.findOneAndUpdate({
                _id: group1
            }, {
                $push: { groups: group2 }
            }, {
                new: true, upsert: true
            }).catch((err) => {
                throw new CustomError_1.CustomError(404, "err");
            });
            return yield group_model_1.modelGroup.findOne({ _id: group1 });
        });
    }
    static alreadyContained(group2) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield group_model_1.modelGroup.findOne({ groups: group2 });
        });
    }
    static personDelete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield group_model_1.modelGroup.updateOne({ persons: id }, { $pull: { persons: id } });
        });
    }
    static searchPerson(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const group = yield group_model_1.modelGroup.findOne({ _id: id });
            return group === null || group === void 0 ? void 0 : group.persons;
        });
    }
    static addPersonToPersons(id, nameOfPerson) {
        return __awaiter(this, void 0, void 0, function* () {
            yield group_model_1.modelGroup.findOneAndUpdate({
                _id: id
            }, {
                $push: { persons: nameOfPerson }
            }, {
                new: true
            });
        });
    }
    static createGroupsDocuments() {
        const groupA = new group_model_1.modelGroup({ nameOfGroup: "A" });
        groupA.save();
        const groupB = new group_model_1.modelGroup({ nameOfGroup: "B" });
        groupB.save();
        const groupC = new group_model_1.modelGroup({ nameOfGroup: "C" });
        groupC.save();
        const groupD = new group_model_1.modelGroup({ nameOfGroup: "D" });
        groupD.save();
        const groupE = new group_model_1.modelGroup({ nameOfGroup: "E" });
        groupE.save();
        groupA.groups = [(groupB._id).toString(), (groupE._id).toString()];
        groupB.groups = [(groupC._id).toString()];
        groupC.groups = [(groupD._id).toString()];
    }
}
exports.default = GroupRepository;
