import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import * as Yup from "yup";
import Swal from "sweetalert2";


let editSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, "Title quá ngắn!")
        .max(10, "Title quá dài!")
        .required("Required"),
    price: Yup.number()
        .min(1000000, "Price nhap phai lon hon 1000000")
        .max(100000000, "So luong nhap phai nho hon 100000000")
        .required("Required"),
    description: Yup.string()
        .min(1, "Mô tả quá ngắn")
        .max(100, "Vượt quá mô tả cho phép")
        .required("Required"),
});

export default function EditTourForm(){
    let id = useParams().id;

    let editNavigate = useNavigate();

    const[Tour,setTour] = useState([]);


    const  editTour = (tour) => {


        Swal.fire({
            title : "Are you sure?",
            showCancelButton : true,
            cancelButtonText : "Cancel"
        }).then((res) => {
            if(res.isConfirmed){
                axios.put('http://localhost:3001/tuors/'+id,tour)
                    .then(response => {
                        console.log(response.data);
                    })
                    .catch(error => {
                        console.log(error);
                    });
                editNavigate("/list-tour");
            }else{
                Swal.fire("Cancel success!")
            }
        })

    }


    useEffect(()=>{
        axios.get('http://localhost:3001/tuors/'+id).then(res=> {
            setTour(res.data);
        })
    },[])

    return (
        <>
            <h1>Edit Tour</h1>
            <Formik
                initialValues={{
                    title: Tour.title,
                    price: Tour.price,
                    description:Tour.description,
                }}
                enableReinitialize={true}
                validationSchema={editSchema}
                onSubmit={(values, { resetForm }) => {

                    editTour({title: values.title,price:values.price,description:values.description});
                    resetForm();
                }}
            >
                <Form>
                    <label htmlFor="title">Title</label>
                    <Field name={"title"}></Field>
                    <ErrorMessage name={'title'}></ErrorMessage>
                    <br/>

                    <label htmlFor="price">Giá</label>
                    <Field name={"price"}></Field>
                    <ErrorMessage name={'price'}></ErrorMessage>
                    <br/>

                    <label htmlFor="description">Mô tả</label>
                    <Field name={"description"}></Field>
                    <ErrorMessage name={'description'}></ErrorMessage>
                    <br/>

                    <button>Submit</button>
                </Form>
            </Formik>
        </>
    )

}