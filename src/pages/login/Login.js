import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";

export function Login(){

    let loginNavigate = useNavigate();

    const listAccount = [
        {userName:"phungkhacdung",password:"1"},
        {userName: "1",password: "1"}
    ]

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const sendDataToProduct =() => {


        const account = listAccount.find((account)=>{
            return account.userName === username && account.password === password;
        })

        if(account){
            loginNavigate("/list-tour");
        }else{
            alert("Thông tin đăng nhập không chính xác !")
        }


    };

    return (
        <>
            <form onSubmit = {sendDataToProduct}>
                <div>
                    <label htmlFor="username">UserName:</label>
                    <input type="text"
                           id= "username"
                           name = "username"
                           value={username}
                           onChange = {(event)=>setUsername(event.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password">UserName:</label>
                    <input type="text"
                           id= "password"
                           name = "password"
                           value={password}
                           onChange = {(event)=>setPassword(event.target.value)}
                    />
                </div>

                <button type="submit">Login</button>
            </form>
        </>
    );

}

export default Login;