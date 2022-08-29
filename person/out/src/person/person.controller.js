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
const person_manager_1 = __importDefault(require("./person.manager"));
class PersonController {
    static PostCreatPerson(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(yield person_manager_1.default.createPerson(req));
        });
    }
    static getReadPerson(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(JSON.stringify(yield person_manager_1.default.ReadPerson(req.params.id)));
        });
    }
    static getReadPersons(res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(JSON.stringify(yield person_manager_1.default.readPersons()));
        });
    }
    static putNamePerson(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(yield person_manager_1.default.updateNamePerson(req.params.id, req.body.nameOfPerson));
        });
    }
    static deletePerson(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(yield person_manager_1.default.deletePersonManger(req.params.id));
        });
    }
    static searchPerson(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(yield person_manager_1.default.searchPerson(req.params.arrayPersons, req.params.nameOfPerson));
        });
    }
    static addPersonToGroups(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(yield person_manager_1.default.addPersonToGroups(req.params.nameOfPerson));
        });
    }
    static populatePersons(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(yield person_manager_1.default.personPop(req.params.arrayPersons));
        });
    }
}
exports.default = PersonController;
