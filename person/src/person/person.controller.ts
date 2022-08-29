import PersonManager from "./person.manager"
import { Request, Response } from 'express'
export default class PersonController{

static async PostCreatPerson(req: Request,res:Response) {
    res.send(await PersonManager.createPerson(req))
}

static async getReadPerson(req: Request,res:Response) {
    res.send(JSON.stringify(await PersonManager.ReadPerson(req.params.id)));
}

static async getReadPersons(res:Response) {
    res.send(JSON.stringify(await PersonManager.readPersons()));
}

static async putNamePerson(req: Request,res:Response) {
    res.send(await PersonManager.updateNamePerson(req.params.id, req.body.nameOfPerson));
}

static async deletePerson(req: Request,res:Response) {
    res.send(await PersonManager.deletePersonManger(req.params.id));
}

static async searchPerson(req: Request,res:Response) {
    res.send(await PersonManager.searchPerson(req.params.arrayPersons,req.params.nameOfPerson));
}

static async addPersonToGroups(req: Request,res:Response) {
    res.send(await PersonManager.addPersonToGroups(req.params.nameOfPerson,req.params.id));
}

static async populatePersons(req: Request, res: Response) {
    res.send(await PersonManager.personPop(req.params.arrayPersons));
}

}









