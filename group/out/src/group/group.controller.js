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
const group_manager_1 = __importDefault(require("./group.manager"));
class GroupController {
    static PostCreatGroup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(yield group_manager_1.default.createGroup(req));
        });
    }
    static getReadGroup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(JSON.stringify(yield group_manager_1.default.ReadGroup(req.params.id)));
        });
    }
    static getReadGroups(res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(JSON.stringify(yield group_manager_1.default.readGroups()));
        });
    }
    static putNameGroup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(yield group_manager_1.default.updateNameGroup(req.params.id, req.body.nameOfGroup));
        });
    }
    static deleteGroup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(yield group_manager_1.default.deleteGroupManger(req.params.id));
        });
    }
    static addGroupToMong(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(yield group_manager_1.default.addGroupToArray(req.params.id, req.body.groups));
        });
    }
    static deletePerson(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(yield group_manager_1.default.deletePerson(req.params.id));
        });
    }
    static searchPerson(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(yield group_manager_1.default.searchPerson(req.params.id));
        });
    }
    static addPersonToPersons(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(yield group_manager_1.default.addPersonToPersons(req.params.id, req.params.nameOfPerson));
        });
    }
}
exports.default = GroupController;
