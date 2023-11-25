import React from "react";
import {useNavigate,Link} from "react-router-dom"
import {useEffect, useState} from "react";
import "./ListTour.css";
import "./my-link-tour.css";
import axios from 'axios';

export default function ListTour(){
    let navigateTour = useNavigate();

    const[listTour,setListTour] = useState([]);


    useEffect(()=>{
        axios.get('http://localhost:3001/tuors').then(res=> {
            setListTour(res.data);
        })
    },[])

    const showFormEdit = index =>{
        navigateTour(`/information/${index}`);
    }
    const showFormCreate = () =>{
        navigateTour(`/create_form`);
    }

    return (
        <>
            {/*<Link to="/create_form" className="my-link-tour" ></Link>*/}
            <div>
                <button onClick = {showFormCreate}>Thêm mới</button>
                <div>
                    <h1>Danh Sách Tour</h1>
                    <table id="alter">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            listTour.map((tour,index) =>
                                (<tr>
                                    <td>{tour.id}</td>
                                    <td>{tour.title}</td>
                                    <td>{tour.price}</td>
                                    <td>{tour.description}</td>
                                    <td>
                                        <button onClick = {()=>showFormEdit(tour.id)}>Thông tin</button>
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
