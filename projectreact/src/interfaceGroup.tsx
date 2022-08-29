import { Person } from "./interfacePerson";

export interface Group {
    _id: string ,
    nameOfGroup: string,
    groups:Group[],
    persons:Person[]
}
