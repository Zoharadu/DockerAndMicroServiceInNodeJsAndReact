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
Object.defineProperty(exports, "__esModule", { value: true });
const person_model_1 = require("./person.model");
class PersonRepository {
    static addPerson(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return new person_model_1.modelPerson({ nameOfPerson: name });
        });
    }
    static readPerson(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield person_model_1.modelPerson.findById(id);
        });
    }
    static readPersonsDb() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield person_model_1.modelPerson.find({});
        });
    }
    static updateNamePersonRepository(id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            return person_model_1.modelPerson.findByIdAndUpdate(id, { "nameOfPerson": name }, { new: true });
        });
    }
    static deletePersonRepository(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield person_model_1.modelPerson.findByIdAndDelete(id);
        });
    }
    static searchPerson(persons, name) {
        return person_model_1.modelPerson.find({ _id: { $in: persons } }).where({ nameOfPerson: { $regex: name } });
    }
    static addPersonToGroups(nameOfPerson) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield person_model_1.modelPerson.findOne({ _id: nameOfPerson });
        });
    }
    static personPop(persons) {
        return person_model_1.modelPerson.find({ _id: { $in: persons } });
    }
    static createPeopleDocuments() {
        const person1 = new person_model_1.modelPerson({ nameOfPerson: "ARI" });
        person1.save();
        const person2 = new person_model_1.modelPerson({ nameOfPerson: "BENI" });
        person2.save();
        const person3 = new person_model_1.modelPerson({ nameOfPerson: "CARL" });
        person3.save();
        const person4 = new person_model_1.modelPerson({ nameOfPerson: "DANI" });
        person4.save();
        const person5 = new person_model_1.modelPerson({ nameOfPerson: "ELI" });
        person5.save();
    }
}
exports.default = PersonRepository;
