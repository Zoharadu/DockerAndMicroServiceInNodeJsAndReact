import mongoose from "mongoose";
import { appPerson } from "./person/person.router"
import express from "express";
import { middleWare } from "././utils/middleWare"
import cors from  "cors"
import { config } from "./config";
import chalk from "chalk";
import PersonRepository from "./person/person.repository";

const appServer = express()
appServer.use(express.json());
appServer.use(cors({origin:"*"}))

appServer.use("/api/person", appPerson);

appServer.use("*", (_req, res) => {
    res.status(404).send("Page not found")
})

appServer.use(middleWare)

async function creatDataBase() {
    mongoose.connect(config.CONNECT,()=>{
        console.log(chalk.greenBright("Database is connected successfully"));
    });
    var connect = await mongoose.connection;
    PersonRepository.createPeopleDocuments();
    return connect;
}

export { appServer, creatDataBase }