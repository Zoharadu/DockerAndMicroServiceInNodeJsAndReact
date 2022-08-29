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
exports.creatDataBase = exports.appServer = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const person_router_1 = require("./person/person.router");
const express_1 = __importDefault(require("express"));
const middleWare_1 = require("././utils/middleWare");
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config");
const chalk_1 = __importDefault(require("chalk"));
const person_repository_1 = __importDefault(require("./person/person.repository"));
const appServer = (0, express_1.default)();
exports.appServer = appServer;
appServer.use(express_1.default.json());
appServer.use((0, cors_1.default)({ origin: "*" }));
appServer.use("/api/person", person_router_1.appPerson);
appServer.use("*", (_req, res) => {
    res.status(404).send("Page not found");
});
appServer.use(middleWare_1.middleWare);
function creatDataBase() {
    return __awaiter(this, void 0, void 0, function* () {
        mongoose_1.default.connect(config_1.config.CONNECT, () => {
            console.log(chalk_1.default.greenBright("Database is connected successfully"));
        });
        var connect = yield mongoose_1.default.connection;
        person_repository_1.default.createPeopleDocuments();
        return connect;
    });
}
exports.creatDataBase = creatDataBase;
