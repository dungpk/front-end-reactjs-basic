import React, {useEffect, useState} from "react";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import "./form_create.css"
export default function CreateTour(){

    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };

    let CreateSchema = Yup.object().shape({
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

    let createNavigate = useNavigate();

    const  addTour = (tour) => {
        axios.post('http://localhost:3001/tuors',tour)
            .then(response => {
                alert(response.data);
            })
            .catch(error => {
                alert(error);
            });

        createNavigate("/list-tour");
        alert("them thanh cong")
    }


    return (
        <>
            <h1>Thêm mới Tour</h1>
            <Formik  
                initialValues={{
                    title: "",
                    price: "",
                    description:"",
                }}
                enableReinitialize={true}
                validationSchema={CreateSchema}
                onSubmit={(values, { resetForm }) => {
                    addTour({title: values.title,price:values.price,description:values.description});
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