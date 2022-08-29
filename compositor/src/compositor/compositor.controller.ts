import { Request, Response } from 'express'
import compositorManager from './compositor.manager'
export default class CompositorController {

    static async deletePerson(req: Request,res:Response) {
        res.send(await compositorManager.deletePersonManger(req.params.id,));
    }

    static async  addPersonToPersons(req: Request,res:Response){
        res.send(await compositorManager.addPersonToPersons(req.params.id, req.params.nameOfPerson));
    }

    static async searchPersonInGroup(req: Request, res: Response) {
        res.send(await compositorManager.searchPersonInGroup(req.params.id, req.params.nameOfPerson));
    }

    static async  getGroupsAndPerson(req:Request,res:Response){
        res.send(await compositorManager.getGroupsAndPerson(req.params.id));
    }
}

