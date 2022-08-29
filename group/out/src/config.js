"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require("dotenv/config");
exports.config = {
    SERVER_PORT: process.env.SERVER_PORT || 3005,
    CONNECT: process.env.MONGO_DB_URL || 'mongodb://localhost:27017/OverlapTask'
};
