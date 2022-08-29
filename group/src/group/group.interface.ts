// import Joi from "joi";
import {  Schema } from "mongoose";
export interface Group {
    _id?: Schema.Types.ObjectId,
    nameOfGroup: string,
    groups: string[],
    persons: string[]
}
export interface PopulatedGroup extends Omit<Group, 'groups'> {
    groups: Group[]
}
