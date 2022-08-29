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
exports.appGroup = void 0;
const express_1 = __importDefault(require("express"));
const group_controller_1 = __importDefault(require("./group.controller"));
exports.appGroup = express_1.default.Router();
exports.appGroup.use(express_1.default.json());
exports.appGroup.post("/createGroup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield group_controller_1.default.PostCreatGroup(req, res);
}));
exports.appGroup.get("/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield group_controller_1.default.getReadGroup(req, res);
    });
});
exports.appGroup.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield group_controller_1.default.getReadGroups(res);
}));
exports.appGroup.patch("/update/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield group_controller_1.default.putNameGroup(req, res);
}));
exports.appGroup.delete("/deleteGroup/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield group_controller_1.default.deleteGroup(req, res);
}));
exports.appGroup.post("/addGroupToGroups/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield group_controller_1.default.addGroupToMong(req, res);
}));
exports.appGroup.delete("/deletePersons/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield group_controller_1.default.deletePerson(req, res);
}));
exports.appGroup.get('/searchPersonInGroup/:id/:nameOfPerson', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield group_controller_1.default.searchPerson(req, res);
}));
exports.appGroup.post("/updateAddPerson/:id/:nameOfPerson", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield group_controller_1.default.addPersonToPersons(req, res);
}));
