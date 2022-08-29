
interface Person{
    _id: string,
    nameOfPerson: string,
    groups:string[]
}

export interface Group {
    _id: string,
    nameOfGroup: string,
    groups: Group[],
    persons: string[]
}

export  interface GroupPop {
    _id: string,
    nameOfGroup: string,
    groups: GroupPop[],
    persons: Person[]
}
