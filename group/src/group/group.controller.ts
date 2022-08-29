import GroupManager from "./group.manager"
import { Request, Response } from 'express'
export default class GroupController {

    static async PostCreatGroup(req: Request, res: Response) {
        res.send(await GroupManager.createGroup(req))
    }

    static async getReadGroup(req: Request, res: Response) {
        res.send(JSON.stringify(await GroupManager.ReadGroup(req.params.id)));
    }

    static async getReadGroups(res: Response) {
        res.send(JSON.stringify(await GroupManager.readGroups()));
    }

    static async putNameGroup(req: Request, res: Response) {
        res.send(await GroupManager.updateNameGroup(req.params.id, req.body.nameOfGroup));
    }

    static async deleteGroup(req: Request, res: Response) {
        res.send(await GroupManager.deleteGroupManger(req.params.id));
    }

    static async addGroupToMong(req: Request, res: Response) {
        res.send(await GroupManager.addGroupToArray(req.params.id,req.body.groups));
    }

    static async deletePerson(req: Request, res: Response) {
        res.send(await GroupManager.deletePerson(req.params.id));
    }

    static async searchPerson(req: Request, res: Response) {
        res.send(await GroupManager.searchPerson(req.params.id));
    }

    static async addPersonToPersons(req: Request, res: Response) {
        res.send(await GroupManager.addPersonToPersons(req.params.id, req.params.nameOfPerson));
    }
 
}

















