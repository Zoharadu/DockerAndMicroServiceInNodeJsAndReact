import { config } from '../config.js';
import axios from 'axios';

export default class compositorServiceGroup {

   static async deletePerson(id: string) {

      return axios.delete(`${config.ADRESS1}/deletePersons/${id}`).then((res) => {
         return res;
      }).catch((err) => {
         throw (err.response?.data || err)
      })
   }

   static async searchPersonInGroup(id: string, nameOfPerson: string) {
      return await axios.get(`${config.ADRESS1}/searchPersonInGroup/${id}/${nameOfPerson}`).then((res) => {
         return res;
      }).catch((err) => {
         throw (err.response?.data || err)
      })
   }

   static async updateAddPerson(_id: string, nameOfPerson: string) {
      return axios.post(`${config.ADRESS1}/updateAddPerson/${_id}/${nameOfPerson}`).then((res) => {
         return res;
      }).catch((err) => {
         throw (err.response?.data || err)
      })
   }

   static async getGroupAndPerson() {
      return axios.get(`${config.ADRESS1}`).then((res) => {
         return res;
      }).catch((err) => {
         throw (err.response?.data || err)
      })
   }

   static async getGroup(id: string) {
      return axios.get(`${config.ADRESS1}/${id}`).then((res) => {
         return res;
      }).catch((err) => {
         console.log(err)
         throw (err.response?.data || err)
      })
   }

}



























