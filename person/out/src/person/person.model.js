"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelPerson = exports.personSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
exports.personSchema = new mongoose_1.Schema({
    nameOfPerson: String,
    groups: [{
            type: mongoose_1.Schema.Types.ObjectId,
            required: true
        }],
});
exports.modelPerson = mongoose_2.default.model('persons', exports.personSchema);
exports.personSchema.index({ _id: 1, nameOfGroup: 1 });
