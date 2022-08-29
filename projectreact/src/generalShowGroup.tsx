import { Button, TextField } from "@mui/material";
import { useState } from "react";
import ApiAxios from "./apiGroup";
import { Group } from "./interfaceGroup";
// import { Person } from "./interfacePerson";
import DeleteIcon from '@mui/icons-material/Delete';
// import SearchIcon from '@mui/icons-material/Search';
import { ShowArrayGroups } from "./group";
import { ShowArrayPersons } from "./group";
// import search from "./generalGroup"
// import { ShowPersonSearch } from "./group";

export const ShowGroups = (props: { group: Group[], setGroup: React.Dispatch<React.SetStateAction<Group[]>>, isLoading: boolean, setIsLoading: React.Dispatch<React.SetStateAction<boolean>>, acceptRecursive: Group[], setAcceptRecursive: React.Dispatch<React.SetStateAction<Group[]>> }): JSX.Element => {

    const [update, setUpdate] = useState("");
    const [persons, setPersons] = useState("");
    const [oneGroup, setGroups] = useState("");
    // const [name, setName] = useState("");
    // const [personSearch, setPersonSearch] = useState<Person[]>([]);
    const [loadGroups, setLoadGroups] = useState(false);
    const { group } = props;
    const { setIsLoading } = props;

    const deleteGroup = (groups: Group) => {
        ApiAxios.deleteGroup(groups._id)
        .then((response) => {
            console.log(response.data)
            setIsLoading(current => !current)
        }).catch((err) => {
            alert(err)
        })
    }

    const updateGroup = (groups: Group, update: string) => {
       ApiAxios.updateGroup(groups._id,update).then(response => {
            setIsLoading(current => !current)
        }).catch((err) => {
            alert(err)
        })
    }

    const addPerson = (groups: Group, nameOfPerson: string) => {
        ApiAxios.addPerson(groups._id,nameOfPerson).then(response => {
            setIsLoading(current => !current)
            setPersons(response.data)
        }).catch((err) => {
            alert(err)
        })
    }

    const addGroup = (group: Group, groups: string) => {
        ApiAxios.addGroup(group._id,groups).then(response => {
            setIsLoading(current => !current)
            setGroups(response.data)
        }).catch((err) => {
            alert(err)
        })
    }

    // const searchPersonInGroup = (groups: Group, nameOfPerson: string) => {
    //     ApiAxios.searchPersonInGroup(groups._id,nameOfPerson).then(response => {
    //         setIsLoading(current => !current)
    //         setPersonSearch(response.data)
    //     }).catch((err) => {
    //         alert(err)
    //     })
    // }

    return (<>
        <div>
            <div className='updates'>
                <TextField className='update3' placeholder='Update name group' onChange={(e) => setUpdate(e.target.value)}></TextField>
                <TextField className='update4' placeholder='Add  id of person' onChange={(e) => setPersons(e.target.value)}></TextField>
                <TextField className='update5' placeholder='Add id of group' onChange={(e) => setGroups(e.target.value)}></TextField>
                {/* <TextField className='update6' placeholder='Search person in group' onChange={(e) => setName(e.target.value)}></TextField> */}
            </div>
            {
                group.map((group, index) => (
                    <div className='cards' id='cards' key={index}>
                        <p><b>Id: </b>{group._id}</p>
                        <p><b>Name: </b>{group.nameOfGroup}</p>
                        <p><b>Groups in group:</b><ShowArrayGroups groups={group.groups} setLoadGroups={setLoadGroups} loadGroups={loadGroups} /></p>
                        <p><b>Person in group:</b><ShowArrayPersons persons={group.persons} /></p>
                        <div>
                            <Button className='button' variant="outlined" onClick={() => deleteGroup(group)} startIcon={<DeleteIcon />}>Delete</Button >
                            <Button variant="contained" className='button' onClick={() => updateGroup(group, update)}>Update</Button>
                            <Button variant="contained" className='button' onClick={() => addPerson(group, persons)}>Add person</Button>
                            <Button variant="contained" className='button' onClick={() => addGroup(group, oneGroup)}>Add group</Button>
                            {/* <Button variant="outlined" className='button' onClick={() => search(group)}><SearchIcon></SearchIcon> Search person</Button> */}
                            {/* <div><ShowPersonSearch personSearch={personSearch} /></div> */}
                        </div>
                    </div>
                ))
            } </div></>)
}