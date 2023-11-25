import React from "react";
import {useNavigate,Link} from "react-router-dom"
import {useEffect, useState} from "react";
import "./ListUser.css";
import "./my-link.css";


import axios from 'axios';

export default function ListUser(){
    let navigate = useNavigate();

    const[listUser,setListUser] = useState([]);


    useEffect(()=>{
        axios.get('http://localhost:8080/user/list').then(res=> {
            setListUser(res.data);
        })

    },[])

    const showFormEdit = index =>{
        navigate(`/information/${index}`);
    }
    const showFormCreate = () =>{
        navigate(`/create_form`);
    }
    return (
        <>
            <Link to="/create_form" className="my-link" ></Link>
            <div>
                <button onClick = {showFormCreate}>Thêm mới</button>
                <div>
                    <h1>Danh Sách</h1>
                    <table id="alter">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Article</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            listUser.map((user,index) =>
                                (<tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.article}</td>
                                    <td>
                                        <button onClick = {()=>showFormEdit(user.id)}>Thông tin</button>
                                    </td>
                                </tr>))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}