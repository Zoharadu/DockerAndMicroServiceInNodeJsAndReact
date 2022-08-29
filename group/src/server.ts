import chalk from "chalk";
import mongoose from "mongoose";
import {appGroup} from './group/group.router'
import express from "express";
import { middleWare } from "./utils/middleWare"
import cors from  "cors"
import { config } from "./config";
import GroupRepository from "./group/group.repository";

const appServer = express()
appServer.use(express.json());
appServer.use(cors({origin:"*"}))

appServer.use("/api/group", appGroup);

appServer.use("*", (_req, res) => {
    res.status(404).send("Page not found")
})

appServer.use(middleWare)

async function creatDataBase() {
    mongoose.connect(config.CONNECT,()=>{
        console.log(chalk.greenBright("Database is connected successfully"));
    });
    var connect = await mongoose.connection;
    GroupRepository.createGroupsDocuments();
    return connect;
}

export { appServer, creatDataBase }


