import { modelPerson } from "./person.model"
export default class PersonRepository {

    static async addPerson(name: string) {
        return new modelPerson({ nameOfPerson: name })
    }

    static async readPerson(id: String) {
        return await modelPerson.findById(id);
    }

    static async readPersonsDb() {
        return await modelPerson.find({});
    }

    static async updateNamePersonRepository(id: string, name: string) {
        return modelPerson.findByIdAndUpdate(id, { "nameOfPerson": name }, { new: true });
    }

    static async deletePersonRepository(id: string) {
        return await modelPerson.findByIdAndDelete(id);
    }

    static searchPerson(persons: string[], name: string) {
        return modelPerson.find({ _id: { $in: persons } }).where({ nameOfPerson: { $regex: name } })
    }

    static async addPersonToGroups(id: object, nameOfPerson: object) {
        
        modelPerson.findOneAndUpdate(
            {
                _id: id
            },
            {
                $push: { groups: nameOfPerson }
            },
            {
                new: true,upsert: true
            }
        ).catch((err) => {
          console.log(err)
        })


        return await modelPerson.findOne({ _id: nameOfPerson });
    }

    static personPop(persons: string[]) {
        return modelPerson.find({ _id: { $in: persons } })
    }

    static createPeopleDocuments() {
        const person1 = new modelPerson({ nameOfPerson: "ARI" }); person1.save();
        const person2 = new modelPerson({ nameOfPerson: "BENI" }); person2.save();
        const person3 = new modelPerson({ nameOfPerson: "CARL" }); person3.save();
        const person4 = new modelPerson({ nameOfPerson: "DANI" }); person4.save();
        const person5 = new modelPerson({ nameOfPerson: "ELI" }); person5.save();
    }

}
