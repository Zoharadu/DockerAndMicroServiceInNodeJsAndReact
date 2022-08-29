import axios from "axios"
import { config } from "../config"
export default class compositorServicePerson {

   static async deletePerson(id: string) {
      return await axios.delete(`${config.ADRESS2}/deletePerson/${id}`).then((res) => {
         return res;
      }).catch((err) => {
         throw (err.response.data || err)
      })
   }

   static async searchPersonByName(nameOfPerson: string, persons: string[]) {
      const arrayPersons=JSON.stringify(persons)
      return await axios.get(`${config.ADRESS2}/searchPersonInGroup/${nameOfPerson}/${arrayPersons}`).then((res) => {
         return res;
      }).catch((err) => {
         throw (err.response.data || err)
      })
   }

   static async getGroupAndPerson(persons: string[]) {
      const arrayPersons=JSON.stringify(persons)
      return await axios.get(`${config.ADRESS2}/populatePersons/${arrayPersons}`).then((res) => {
         return res.data;
      }).catch((err) => {
         throw (err.response.data || err)
      })
   }

   static async updateAddPerson(_id: string, nameOfPerson: string) {
      return await axios.post(`${config.ADRESS2}/addPrsonToGroup/${_id}/${nameOfPerson}`).then((res) => {
         return res;
      }).catch((err) => {
         throw (err.response.data || err)
      })
   }

}

