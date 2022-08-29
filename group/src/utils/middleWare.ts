import { CustomError } from "./CustomError"
import { NextFunction, Request, Response } from "express";

export const middleWare = async (error: Error, _request: Request, response: Response, _next: NextFunction) => {
    if (error instanceof CustomError) {
        response.header("Content-Type", 'application/json');
        response.status(error.status).send(error.message)
    }
    else
        response.status(500).send("something unexpected went wrong while processing the request");
}