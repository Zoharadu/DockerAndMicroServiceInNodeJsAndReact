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
exports.middleWare = void 0;
const CustomError_1 = require("./CustomError");
const middleWare = (error, _request, response, _next) => __awaiter(void 0, void 0, void 0, function* () {
    if (error instanceof CustomError_1.CustomError) {
        response.header("Content-Type", 'application/json');
        response.status(error.status).send(error.message);
    }
    else
        response.status(500).send("something unexpected went wrong while processing the request");
});
exports.middleWare = middleWare;
