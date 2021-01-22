import React from "react";
import { Link } from "react-router-dom";

const links = [{
    to: "/",
    title:"HOME"
},
    {
        to: "/about",
        title:"ABOUT"
    },
    {
        to: "/users",
        title:"USERS"
    },
    {
        to: "/login",
        title:"Login"
    }
]

const Navbar = () => {
    return (<div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            {links.map((e)=><div style={{margin:10}} key={e.to}><Link to={e.to}>{e.title}</Link></div>)}
        </div>)

}

export { Navbar }