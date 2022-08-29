import { Request } from 'express'
import compositorServiceGroup from './compositor.service.group';
import compositorServicePerson from './compositor.service.person';
import { GroupPop } from './compositor.interface';
export default class compositorManager {

    static async deletePersonManger(id:string) {
        return await compositorServiceGroup.deletePerson(id).then(async (res) => {
            return await compositorServicePerson.deletePerson(id)
                .then(() => { console.log("The deletion was successful") })
                .catch((error) => {
                    console.log(error.response.data);
                })
        })
            .catch((err) => { return err.response.data })
    }

    static async addPersonToPersons(id: string,nameOfPerson:string) {
        return compositorServicePerson.updateAddPerson(id, nameOfPerson).then((res) => {
            return compositorServiceGroup.updateAddPerson(id,nameOfPerson).then(async (res) => {
                console.log(res.data)
            })
        }).catch((err) => {
            return err.response.data
        })
    }

    static async searchPersonInGroup(id: string,nameOfPerson:string) {
        return await compositorServiceGroup.searchPersonInGroup(id, nameOfPerson).then(async (res) => {
            return compositorServicePerson.searchPersonByName(nameOfPerson, res.data).then(async (res) => {
                     return (res.data) 
                    })
        }).catch((error) => {
        }).catch((error) => { return error.response.data })
    }

    static async getGroupsAndPerson(id: string) {
        return compositorServiceGroup.getGroup(id).then(async (response) => {

            const newGroup: GroupPop = {
                _id: response.data._id,
                nameOfGroup: response.data.nameOfGroup,
                groups: [],
                persons: await compositorServicePerson.getGroupAndPerson(response.data.persons) as any
            }
            let length = response.data.groups.length;

            while (length !== 0) {
                length--;
                await Promise.all(response.data.groups.map(async (element: string) => {
                    const group2: GroupPop = await compositorManager.getGroupsAndPerson(element)
                    newGroup.groups.push(group2)
                    return;
                }));
            }
            return newGroup
        })
    }

}




