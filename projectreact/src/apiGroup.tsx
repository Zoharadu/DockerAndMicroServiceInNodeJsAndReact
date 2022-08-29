import axios from "axios";
import { config } from "./config";

export default class ApiAxios{

    static getAllGroups() {
        return axios.get(`${config.ADRESS1}`);
    }

    static getGroupRec(id:string){
        return axios.get(`${config.ADRESS3}/getGroupsAndPerson/${id}`);
    }

    static deleteGroup(id:string | undefined){
     return  axios.delete(`${config.ADRESS1}/deleteGroup/${id}`)
    }

    static updateGroup(id:string | undefined,update:string){
        return axios.patch(`${config.ADRESS1}/update/${id}`,{
            nameOfGroup: update
        })
    }

    static addPerson(id:string |undefined ,nameOfPerson:string){
        return axios.post(`${config.ADRESS3}/updateAddPerson/${id}/${nameOfPerson}`,{
        })
    }

    static addGroup(id:string |undefined ,groups:string){
        return axios.post(`${config.ADRESS1}/addGroupToGroups/${id}`,{
            groups: groups
        })
    }

    static searchPersonInGroup(id:string |undefined,nameOfPerson:string){
        return axios.get(`${config.ADRESS3}/searchPersonInGroup/${id}/${nameOfPerson}`)
    }

    static createGroup(name:string){
        return axios.post(`${config.ADRESS1}/createGroup`,{
            nameOfGroup: name,
            groups: [],
            persons: []
        })
    }
}


























