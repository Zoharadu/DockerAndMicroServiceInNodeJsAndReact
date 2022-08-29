"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const config_1 = require("./config");
const chalk_1 = __importDefault(require("chalk"));
(0, server_1.creatDataBase)();
server_1.appServer.listen(config_1.config.SERVER_PORT, () => {
    console.log(chalk_1.default.yellow(`server started at http://localhost:${config_1.config.SERVER_PORT}`));
});
