import React from 'react';
import './group.css'
import { Person } from './interfacePerson';
import { Group } from './interfaceGroup';

export function ShowArrayGroups(props: { groups: Group[], setLoadGroups: React.Dispatch<React.SetStateAction<boolean>>, loadGroups: boolean }): JSX.Element {

    const { groups } = props;
    const { setLoadGroups } = props;
    const { loadGroups } = props;

    return (<>
        {
            groups.map((group, index) => (
                <div key={index}><ShowGroup index={index} id={group._id} nameOfGroup={group.nameOfGroup} groups={group.groups} persons={group.persons} setLoadGroups={setLoadGroups} loadGroups={loadGroups} /></div>
            ))
        }
    </>)
}

function ShowGroup(props: { index: number, id: any, nameOfGroup: string, groups: Group[], persons: Person[], setLoadGroups: React.Dispatch<React.SetStateAction<boolean>>, loadGroups: boolean }) {

    const { index } = props;
    const { id } = props;
    const { nameOfGroup } = props;
    const { groups } = props;
    const { persons } = props;

    return (<>
        {
            <div key={index}>
                <div>
                    <p><b>Id: </b>{id}</p>
                    <p><b>Name: </b>{nameOfGroup}</p>
                    <div><ShowGrou groups={groups} /></div>
                    <div><ShowArrayPersons persons={persons} /></div>
                </div>
            </div>
        }
    </>)
}

function ShowGrou(props: { groups: Group[] }): JSX.Element {

    const { groups } = props;

    return (<>
        {
            groups.map((group, index) => (
                <ul key={index}>
                    <li ><b>Name:</b>{group.nameOfGroup}</li>
                    <li key={group._id} ><b>Id: </b>  {group._id}</li>
                    <ul><ShowArrayPersons persons={group.persons} /></ul>
                </ul>
            ))
        }
    </>)
}

export function ShowArrayPersons(props: { persons: Person[] }): JSX.Element {

    const { persons } = props

    return (<>
        <ul className='ShowArrayPersons'>
            {
                persons.map((person, index) => (
                    <div key={index}>
                        <li key={person._id} ><b>Id: </b>  {person._id}</li>
                    </div>
                ))}
        </ul>
    </>)
}

export function ShowPersonSearch(props: { personSearch: Person[] }): JSX.Element {

    const { personSearch } = props

    return (<>
        {
            personSearch.map((person, index) => (
                <ul className="showPersonSearch" >
                    <div key={index}>
                        <li key={person.nameOfPerson}><b>Name: </b>{person.nameOfPerson}</li>
                    </div>
                </ul>
            ))}
    </>)
}
















