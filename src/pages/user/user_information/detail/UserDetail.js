import {useLocation, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
export function UserDetail(){
    let id = useParams().id;

    let navigate = useNavigate();

    const[User,setUser] = useState([]);


    useEffect(()=>{
        axios.get('http://localhost:8080/user/detail/'+id).then(res=> {
            setUser(res.data);
        })
    },[])

    return (
        <>
            <div>
                <h1>Employee Detail</h1>
                <p>ID: {User.id}</p>
                <p>Name: {User.name}</p>
                <p>Age: {User.age}</p>
            </div>
        </>
    )
}


