import { CustomError } from "./CustomError"
import { NextFunction, Request, Response } from "express";
import axios from "axios";

export const middleWare = async (error: Error, _request: Request, response: Response, _next: NextFunction) => {

    if (error instanceof CustomError) {
        const status = error.status || 500;
        const message = error.message || 'Something went worng';
        response.header("Content-Type", 'application/json');
        response.status(error.status).send(error.message)
    }

    if (axios.isAxiosError(error))
        response.status(error.request?.status || 500).send({ status: error.response?.status, message: (error.response?.data as any).message })
    response.status(500).send("something unexpected went wrong while processing the request");
}



