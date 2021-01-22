import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({id,first_name,avatar,handleCards}) => {
    return (
        <div onClick={handleCards}  style={{margin:"10px auto" ,width:"20%" ,border:"1px solid black"}}>
            <img src={avatar} alt="avtar" style={{borderRadius:"50%"}} />
            <h2>{first_name}</h2>
            {/* <Link to={`/users/${id}`}>More Detail</Link> */}
        </div>
    )
}

export {Cards}
