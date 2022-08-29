import axios from "axios";
import { config } from "./config";

export default class ApiAxios{

    static getAllPerson() {
       return axios.get(`${config.ADRESS2}`)
    }

    static getPerson(id:string | undefined){
        return   axios.get(`${config.ADRESS2}/readperson/${id}`)
    } 

    static deletePerson(id:string | undefined){
       return axios.delete(`${config.ADRESS3}/deletePerson/${id}`)
    }

    static updatePerson(id:string | undefined ,update:string){
       return axios.patch(`${config.ADRESS2}/update/${id}` , {
            nameOfPerson: update
        })
    }

}