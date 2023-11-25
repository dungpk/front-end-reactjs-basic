import {useLocation, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
export function TourDetail(){
    let id = useParams().id;

    let navigate = useNavigate();

    const[Tour,setTour] = useState([]);


    useEffect(()=>{
        axios.get('http://localhost:3001/tuors/'+id).then(res=> {
            setTour(res.data);
        })
    },[])

    return (
        <>
            <div>
                <h1>Tour Detail</h1>
                <p>ID: {Tour.id}</p>
                <p>Title: {Tour.title}</p>
                <p>Price: {Tour.price}</p>
                <p>Description: {Tour.description}</p>
            </div>
        </>
    )
}


