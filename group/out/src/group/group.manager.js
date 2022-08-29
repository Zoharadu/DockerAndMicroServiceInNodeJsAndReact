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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const group_model_1 = require("./group.model");
const group_repository_1 = __importDefault(require("./group.repository"));
const CustomError_1 = require("../utils/CustomError");
class GroupManager {
    static createGroup(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const group = {
                nameOfGroup: req.body.nameOfGroup,
                groups: req.body.groups,
                persons: req.body.persons
            };
            return yield group_repository_1.default.addGroup(group);
        });
    }
    static ReadGroup(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const group = yield group_repository_1.default.readGroup(id);
            if (!group)
                throw new CustomError_1.CustomError(404, "This group does not exist");
            return group;
        });
    }
    static readGroups() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield group_repository_1.default.readGroupsDb();
        });
    }
    static updateNameGroup(id, nameOfGroup) {
        return __awaiter(this, void 0, void 0, function* () {
            const group = yield group_repository_1.default.updateNameGroupRepository(id, nameOfGroup);
            if (!group)
                throw new CustomError_1.CustomError(404, "This group does not exist");
            return group;
        });
    }
    static deleteGroupManger(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield group_repository_1.default.deleteGroupRepository(id);
        });
    }
    static addGroupToArray(id, groups) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield group_model_1.modelGroup.findOne({ _id: id });
            if (result && id !== groups)
                return yield group_repository_1.default.addGroups(Object(id), groups);
            throw new CustomError_1.CustomError(404, "This group does not exist or non-standard values");
        });
    }
    static deletePerson(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield group_repository_1.default.personDelete(id);
        });
    }
    static searchPerson(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const group = yield group_repository_1.default.readGroup(id);
            if (group)
                return group_repository_1.default.searchPerson(id);
            throw new CustomError_1.CustomError(404, 'group not found');
        });
    }
    static addPersonToPersons(id, nameOfPerson) {
        return __awaiter(this, void 0, void 0, function* () {
            const group = yield group_repository_1.default.readGroup(id);
            if (group)
                return group_repository_1.default.addPersonToPersons(id, nameOfPerson);
            throw new CustomError_1.CustomError(404, 'group not found');
        });
    }
}
exports.default = GroupManager;
