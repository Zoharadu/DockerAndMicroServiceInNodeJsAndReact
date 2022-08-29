import { Group } from "./interfaceGroup";

export interface Person {
    _id?: string ,
    nameOfPerson: string,
    groups:Group[]
}
