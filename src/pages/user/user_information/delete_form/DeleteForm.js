import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";

export default function DeleteForm(){
    let id = useParams().id;

    let deleteNavigate = useNavigate();

    const[User,setUser] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/user/detail/'+id).then(res=> {
            setUser(res.data);
        })

    },[])

    function deleteEmployee(){
        axios.post('http://localhost:8080/user/delete',User)
            .then(response => {
                alert(response.data);
            })
            .catch(error => {
                alert(error);
            });

        deleteNavigate("/list-user");
    }

    return (
        <>
            <div>
                <h1>Employee Delete</h1>
                <p>ID: {User.id}</p>
                <p>Name: {User.name}</p>
                <p>Age: {User.age}</p>
            </div>
            <br/>
            <button onClick={deleteEmployee}>Delete</button>
        </>
    )
}