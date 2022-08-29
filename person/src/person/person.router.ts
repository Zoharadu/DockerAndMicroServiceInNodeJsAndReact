import express from "express";
import PersonController from "./person.controller";

export const appPerson = express.Router()

appPerson.post("/createPerson", async (req, res) =>{
    await PersonController.PostCreatPerson(req, res);
});

appPerson.get("/readperson/:id", async  (req, res)=> {
    await PersonController.getReadPerson(req, res);
});

appPerson.get("/", async (_req, res)=> {
    await PersonController.getReadPersons(res);
});

appPerson.patch("/update/:id", async (req, res)=> {
    await PersonController.putNamePerson(req, res);
});

appPerson.delete("/deletePerson/:id", async (req, res) =>{
    await PersonController.deletePerson(req, res);
});

appPerson.get('/searchPersonInGroup/:nameOfPerson/:arrayPersons', async (req, res) => {
   await PersonController.searchPerson (req, res)
})

appPerson.post("/addPrsonToGroup/:id/:nameOfPerson", async (req, res) => {
    await PersonController.addPersonToGroups(req, res);
})

appPerson.get("/populatePersons/:arrayPersons", async (req, res) => {
    await PersonController.populatePersons(req, res);
})



