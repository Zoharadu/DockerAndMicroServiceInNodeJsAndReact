"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelGroup = exports.groupSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
exports.groupSchema = new mongoose_2.Schema({
    nameOfGroup: {
        type: String,
        required: true
    },
    groups: [{
            type: mongoose_2.Schema.Types.ObjectId,
            required: true
        }],
    persons: [{
            type: mongoose_2.Schema.Types.ObjectId,
            required: true
        }]
});
exports.modelGroup = mongoose_1.default.model('groups', exports.groupSchema);
exports.groupSchema.index({ _id: 1, nameOfGroup: 1 });
