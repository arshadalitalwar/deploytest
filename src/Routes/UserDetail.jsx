import React from 'react'
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const UserDetail = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [detail, setDetail] = React.useState([]);
    let { id } = useParams();

    React.useEffect(() => {
        console.log(id);
        getUsers(); 
    }, [])
    
   const getUsers = () => {
        setIsLoading(true)
       axios.get(`https://reqres.in/api/users/${id}`).then((res) => {
            console.log(res.data.data)
            setDetail(res.data.data)
            setIsLoading(false);
        }).catch((err) => {
            console.log(err);
            setIsLoading(false);
        })
    }
    const { avatar, first_name, last_name, email } = detail;
    return isLoading?<div>....Loding</div>: (
        <div>
            <h1>Users Detail</h1>
            <img src={avatar} alt="avtar" />
            <h3>{first_name} {last_name}</h3>
            <p>{email}</p>
                
            <Link to="/users">Users</Link>
         
        </div>
    )
}

export  {UserDetail}
