import React from 'react'
import axios from "axios";
import { Cards } from '../Components/Cards';
import { Redirect } from 'react-router-dom';
import {useHistory} from "react-router-dom"
const Users = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [detail, setDetail] = React.useState([]);
    const history = useHistory();   

    React.useEffect(() => {
        getUsers(); 
    }, [])
    
   const getUsers = () => {
        setIsLoading(true)
       axios.get("https://reqres.in/api/users").then((res) => {
            console.log(res.data.data)
            setDetail(res.data.data)
            setIsLoading(false);
        }).catch((err) => {
            console.log(err);
            setIsLoading(false);
        })
    }
    const handleCard = (id) => {
        console.log(id);
        history.push(`/users/${id}`);
        
    }

    return isLoading?<div>....Loding</div>: (
        <div>
            <h1>Users</h1>
            {detail?.map((e) => <Cards handleCards={()=>handleCard(e.id)}  {...e}></Cards>)
                
         }   
        </div>
    )
}

export  {Users}
