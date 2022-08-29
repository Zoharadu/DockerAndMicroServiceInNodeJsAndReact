import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import ApiAxios from "./apiGroup";
import { ShowGroups } from './generalShowGroup'
import { Group } from "./interfaceGroup";
import './group.css'
import { ShowPersonSearch } from "./group";
import { Person } from "./interfacePerson";
// import { ShowPersonSearch } from "./group";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';

export const GeneralGroup = () => {

    const [group, setGroup] = useState<Group[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [acceptRecursive, setAcceptRecursive] = useState<Group[]>([]);
    const [personSearch, setPersonSearch] = useState<Person[]>([]);
    const [nameSearch, setName] = useState("");
    const [searchGroup, setSearchGroup] = useState<Group[]>([]);
    const [search, setSearch]  = useState<string>("");

    useEffect(() => {

        setGroup([]);

        ApiAxios.getAllGroups().then(response => {
            response.data.forEach((element: { _id: string; }) => {
                ApiAxios.getGroupRec(element._id).then(response => {
                    setGroup(prevState => ([...prevState, response.data]))
                })
                    .catch(err => {
                        alert(err)
                    })
            });
        }).catch(err => {
            alert(err.response.data)
        })
        ApiAxios.getAllGroups().then(response => {
            setSearchGroup(prevState => ([...prevState, response.data]))
        });
        
    }, [isLoading])

    const createGroup = (name: string) => {
        ApiAxios.createGroup(name).then(response => setGroup(current => ([...current, response.data])))
            .catch(err => {
                alert(err.response.data)
            })
    }

    const searchPersonInGroup = () => {
        ApiAxios.searchPersonInGroup(search, nameSearch).then(response => {
            setIsLoading(current => !current)
            setPersonSearch(response.data)
        }).catch((err) => {
            alert(err)
        })
    }

    let name = "";

    return (
        <>
        <div className='firstDiv'>
            <TextField className='name1' placeholder='Name of group' type='string' onChange={(e) => name = e.target.value}></TextField>
            <Button className='creat' variant="outlined" type='submit' color="secondary" onClick={() => createGroup(name)}>Create</Button>
            <TextField className='search' placeholder='Search person in group' onChange={(e) => setName(e.target.value)}></TextField>
            <div><ShowGroups group={group} setGroup={setGroup} isLoading={isLoading} setIsLoading={setIsLoading} acceptRecursive={acceptRecursive} setAcceptRecursive={setAcceptRecursive} /></div>
            
            <form
            
            onSubmit={(e) => {
                searchPersonInGroup();}}>

            <Select
                className="select"
                required
                onChange={(event) => setSearch((event.target.value) as any)}>

                <option></option>

                {searchGroup.map((group) => (
                    <option value={group._id}>{group.nameOfGroup}</option>
                ))}

            </Select>

            <Button variant="outlined" className='button'> <SearchIcon></SearchIcon> Search person</Button> 
            
            </form>

            <div><ShowPersonSearch personSearch={personSearch} /></div>
        </div >
        </>
    )

}




