import React, {useEffect, useState} from "react";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import {useNavigate} from "react-router-dom";
export default function CreateUser(){

    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };

    const CreateSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Required"),
        age: Yup.number()
            .min(1, "Gia tri nhap phai lon hon 0")
            .max(100, "So luong nhap phai nho hon 100")
            .required("Required"),
    });

    let createNavigate = useNavigate();

const  addUser = (user) => {
    axios.post('http://localhost:8080/user/create',user)
        .then(response => {
            alert(response.data);
        })
        .catch(error => {
            alert(error);
        });

    createNavigate("/list-user");
    alert("them thanh cong")
}


    return (
        <>
            <h1>Thêm mới</h1>
            <Formik
                initialValues={{
                    name: "",
                    age: "",
                }}
                enableReinitialize={true}
                validationSchema={CreateSchema}
                onSubmit={(values, { resetForm }) => {
                    addUser({name: values.name,age:values.age});
                    resetForm();
                }}
            >
                <Form>
                    <label htmlFor="name">Tên</label>
                    <Field name={"name"}></Field>
                    <ErrorMessage name={'name'}></ErrorMessage>
                    <br/>
                    <label htmlFor="age">Tuổi</label>
                    <Field name={"age"}></Field>
                    <ErrorMessage name={'age'}></ErrorMessage>
                    <br/>
                    <button>Submit</button>
                </Form>
            </Formik>
        </>

    )
}