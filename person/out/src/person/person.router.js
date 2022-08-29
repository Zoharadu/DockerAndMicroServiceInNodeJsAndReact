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
exports.appPerson = void 0;
const express_1 = __importDefault(require("express"));
const person_controller_1 = __importDefault(require("./person.controller"));
exports.appPerson = express_1.default.Router();
exports.appPerson.post("/createPerson", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield person_controller_1.default.PostCreatPerson(req, res);
}));
exports.appPerson.get("/readperson/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield person_controller_1.default.getReadPerson(req, res);
}));
exports.appPerson.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield person_controller_1.default.getReadPersons(res);
}));
exports.appPerson.patch("/update/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield person_controller_1.default.putNamePerson(req, res);
}));
exports.appPerson.delete("/deletePerson/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield person_controller_1.default.deletePerson(req, res);
}));
exports.appPerson.get('/searchPersonInGroup/:nameOfPerson/:arrayPersons', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield person_controller_1.default.searchPerson(req, res);
}));
exports.appPerson.post("/addPrsonToGroup/:id/:nameOfPerson", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield person_controller_1.default.addPersonToGroups(req, res);
}));
exports.appPerson.get("/populatePersons/:arrayPersons", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield person_controller_1.default.populatePersons(req, res);
}));
