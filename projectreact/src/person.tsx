import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { Group } from './interfaceGroup';
import { Person } from './interfacePerson';
import './person.css'
import Alert from '@mui/material/Alert';
import { Button, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ApiAxios from './apiPerson'

const GeneralPerson = () => {

    const [person, setPerson] = useState<Person[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setError] = useState(false);
    const [massage, setMassage] = useState("");

    useEffect(() => {
        setPerson([]);

        ApiAxios.getAllPerson().then(response => {
            response.data.forEach((element: { _id: string; }) => {
                ApiAxios.getPerson(element._id).then(response => {
                    setPerson(prevState => ([...prevState, response.data]))
                    setError(false)
                })
            });
        }).catch(err => {
            alert(err.response.data)
            setError(true)
            setMassage(err.response.data)
        })
    }, [isLoading])

    const createPerson = (name: string) => {
        axios.post('http://localhost:8000/api/person/createPerson', {
            nameOfPerson: name
        })
            .then(response =>
                setPerson(current => ([...current, response.data]))
            )
            .catch(err => {
                alert(err.response.data)
                setError(true)
                setMassage("error")
            })
    }

    let name = "";

    return (
        <div >
            <TextField className='name1' placeholder='Name of person' type='string' onChange={(e) => name = e.target.value}></TextField>
            <Button className='button' variant="outlined" type='submit' onClick={() => createPerson(name)}>Create</Button>
            {err && <Alert severity="warning" style={{ width: "20%" }} onClose={() => { setError(false) }} >{massage}</Alert>}
            <div><ShowPersons person={person} setPerson={setPerson} isLoading={isLoading} setIsLoading={setIsLoading} /></div>
        </div>
    )
}

const ShowPersons = (props: { person: Person[], setPerson: React.Dispatch<React.SetStateAction<Person[]>>, isLoading: boolean, setIsLoading: React.Dispatch<React.SetStateAction<boolean>> }): JSX.Element => {

    const [update, setUpdate] = useState("");
    const [err, setError] = useState(false);
    const [massage, setMassage] = useState("");
    const { person } = props;
    const { setIsLoading } = props;

    const deletePerson = (persons: Person) => {
       ApiAxios.deletePerson(persons._id).then((response) => {
            setIsLoading(current => !current)
        }).catch((err) => {
            setError(true)
            setMassage("error")
        })
    }

    const updatePerson = (persons: Person, update: string) => {
        ApiAxios.updatePerson(persons._id,update).then((response) => {
            setIsLoading(current => !current)
        }).catch((err) => {
            setError(true)
            setMassage("error")
        })
    }

    return (<>
        <div>
            <div>
                <TextField className='update3' placeholder='Update name person' onChange={(e) => setUpdate(e.target.value)}></TextField>
            </div>
            {
                person.map((persons, index) => (
                    <div className='cards' key={index}>
                        <p><b>Id: </b>{persons._id}</p>
                        <p><b>Name: </b>{persons.nameOfPerson}</p>
                        <div><b>Groups:</b><ShowArrayGroups groups={persons.groups} /></div>
                        <div>
                            <Button className='button' variant="outlined" onClick={() => deletePerson(persons)} startIcon={<DeleteIcon />}>Delete</Button>
                            <Button className='button' variant="contained" onClick={() => updatePerson(persons, update)}>Update</Button>
                        </div>
                        {err &&
                            <div>
                                <Alert onClose={() => { setError(false) }} severity="error">{massage}</Alert>
                            </div>
                        }
                    </div>
                ))

            } </div></>)
}

function ShowArrayGroups(props: { groups: Group[] }): JSX.Element {
    const { groups } = props;

    return (<>
        {
            groups.map((group, index) => (
                <ul className="showGroup">
                    <div key={index}>
                        <li key={group._id}><b>Id: </b>{group as any}</li>
                    </div>
                </ul>
            ))}
    </>)
}

export default GeneralPerson





