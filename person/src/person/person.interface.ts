import {Schema } from "mongoose"

export interface Person{
    _id?:Schema.Types.ObjectId,
    nameOfPerson:string,
    groups:Schema.Types.ObjectId[],
}


