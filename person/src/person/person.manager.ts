import { Request } from 'express';
import { modelPerson } from "./person.model";
import "./person.interface";
import PersonRepository from "./person.repository";
import { CustomError } from "../utils/CustomError";
export default class PersonManager {

    static async createPerson(req: Request) {
        const result = await modelPerson.findOne({ nameOfPerson: req.body.nameOfPerson }).exec();
        if (!result)
            return await PersonRepository.addPerson(req.body.nameOfPerson);
        else
            throw new CustomError(400, "This person already exists")
    }

    static async ReadPerson(id: string) {
        const result = await modelPerson.findOne({ _id: id });
        if (result)
            return await PersonRepository.readPerson(id);
        else
            throw new CustomError(404, "This person does not exist")
    }

    static async readPersons() {
        return await PersonRepository.readPersonsDb();
    }

    static async updateNamePerson(id: string,nameOfPerson:string) {
        const result = await modelPerson.findOne({ _id: id }).exec()
        if (result)
            return await PersonRepository.updateNamePersonRepository(id, nameOfPerson);
        else
            throw new CustomError(404, "This person does not exist")
    }

    static async deletePersonManger(id: string) {
        const result = await modelPerson.findOne({ _id: id }).exec();
        if (result)
            return await PersonRepository.deletePersonRepository(id);
        throw new CustomError(404, "This person does not exist")
    }

    static async searchPerson(arrayPersons: string,nameOfPerson:string) {
        const arrayPerspns=JSON.parse(arrayPersons)        
        const result = PersonRepository.searchPerson([arrayPerspns], nameOfPerson);
        if (result)
            return result;
        throw new CustomError(400, "This person does not exist")
    }

    static async addPersonToGroups(nameOfPerson:string,id:string) {
        const person=await modelPerson.findById({_id:nameOfPerson})
        
        return await PersonRepository.addPersonToGroups(nameOfPerson as any,id as any);
    }

    static async personPop(arrayPersons: string) {
        const arrayPerspns=JSON.parse(arrayPersons)
        return await PersonRepository.personPop(arrayPerspns)
    }
} 


