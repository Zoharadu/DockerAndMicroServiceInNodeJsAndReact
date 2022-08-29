import express from 'express';
import CompositorController from "./compositor.controller";

export const appRouterCompositor = express.Router()

appRouterCompositor.delete("/deletePerson/:id", CompositorController.deletePerson);

appRouterCompositor.get("/searchPersonInGroup/:id/:nameOfPerson", CompositorController.searchPersonInGroup) 

appRouterCompositor.post("/updateAddPerson/:id/:nameOfPerson", CompositorController.addPersonToPersons)

appRouterCompositor.get("/getGroupsAndPerson/:id", CompositorController.getGroupsAndPerson)





