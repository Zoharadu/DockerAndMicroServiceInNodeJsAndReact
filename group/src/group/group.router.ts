import express from 'express';
import GroupController from "./group.controller";

export const appGroup = express.Router()
appGroup.use(express.json());

appGroup.post("/createGroup", async (req, res) => {
    await GroupController.PostCreatGroup(req, res);
});

appGroup.get("/:id", async function (req, res) {
    console.log("group router")
    await GroupController.getReadGroup(req, res);
});

appGroup.get("/",  async (_req, res) => {
    await GroupController.getReadGroups(res);
});

appGroup.patch("/update/:id", async (req, res) => {
    await GroupController.putNameGroup(req, res);
});

appGroup.delete("/deleteGroup/:id", async (req, res) => {
    await GroupController.deleteGroup(req, res);
});

appGroup.post("/addGroupToGroups/:id", async (req, res) => {
    await GroupController.addGroupToMong(req, res);
})

appGroup.delete("/deletePersons/:id",async (req, res)=>{
    await GroupController.deletePerson(req, res);
})

appGroup.get('/searchPersonInGroup/:id/:nameOfPerson', async (req, res) => {
    await GroupController.searchPerson(req, res)
})

appGroup.post("/updateAddPerson/:id/:nameOfPerson", async (req, res) => {
    await GroupController.addPersonToPersons(req, res);
})









