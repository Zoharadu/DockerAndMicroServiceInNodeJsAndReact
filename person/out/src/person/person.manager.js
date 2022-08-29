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
const person_model_1 = require("./person.model");
require("./person.interface");
const person_repository_1 = __importDefault(require("./person.repository"));
const CustomError_1 = require("../utils/CustomError");
class PersonManager {
    static createPerson(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield person_model_1.modelPerson.findOne({ nameOfPerson: req.body.nameOfPerson }).exec();
            if (!result)
                return yield person_repository_1.default.addPerson(req.body.nameOfPerson);
            else
                throw new CustomError_1.CustomError(400, "This person already exists");
        });
    }
    static ReadPerson(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield person_model_1.modelPerson.findOne({ _id: id });
            if (result)
                return yield person_repository_1.default.readPerson(id);
            else
                throw new CustomError_1.CustomError(404, "This person does not exist");
        });
    }
    static readPersons() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield person_repository_1.default.readPersonsDb();
        });
    }
    static updateNamePerson(id, nameOfPerson) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield person_model_1.modelPerson.findOne({ _id: id }).exec();
            if (result)
                return yield person_repository_1.default.updateNamePersonRepository(id, nameOfPerson);
            else
                throw new CustomError_1.CustomError(404, "This person does not exist");
        });
    }
    static deletePersonManger(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield person_model_1.modelPerson.findOne({ _id: id }).exec();
            if (result)
                return yield person_repository_1.default.deletePersonRepository(id);
            throw new CustomError_1.CustomError(404, "This person does not exist");
        });
    }
    static searchPerson(arrayPersons, nameOfPerson) {
        return __awaiter(this, void 0, void 0, function* () {
            const arrayPerspns = JSON.parse(arrayPersons);
            const result = person_repository_1.default.searchPerson([arrayPerspns], nameOfPerson);
            if (result)
                return result;
            throw new CustomError_1.CustomError(400, "This person does not exist");
        });
    }
    static addPersonToGroups(nameOfPerson) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield person_repository_1.default.addPersonToGroups(nameOfPerson);
        });
    }
    static personPop(arrayPersons) {
        return __awaiter(this, void 0, void 0, function* () {
            const arrayPerspns = JSON.parse(arrayPersons);
            return yield person_repository_1.default.personPop(arrayPerspns);
        });
    }
}
exports.default = PersonManager;
