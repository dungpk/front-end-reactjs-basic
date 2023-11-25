import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function DeleteTourForm(){
    let id = useParams().id;

    let deleteNavigate = useNavigate();

    const[Tour,setTour] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3001/tuors/'+id).then(res=> {
            setTour(res.data);
        })

    },[])

    function deleteTour(){
        Swal.fire({
            title : "Are you sure?",
            showCancelButton : true,
            cancelButtonText : "Cancel"
        }).then((res) => {
            if(res.isConfirmed){
                axios.delete('http://localhost:3001/tuors/'+id)
                    .then(response => {
                        console.log(response.data);
                    })
                    .catch(error => {
                        console.log(error);
                    });
                deleteNavigate("/list-tour");
            }else{
                Swal.fire("Cancel success!")
            }
        })
    }

    return (
        <>
            <div>
                <h1>Tour Delete</h1>
                <p>ID: {Tour.id}</p>
                <p>Title: {Tour.title}</p>
                <p>Price: {Tour.price}</p>
                <p>Description: {Tour.description}</p>
            </div>
            <br/>
            <button onClick={deleteTour}>Delete</button>
        </>
    )
}