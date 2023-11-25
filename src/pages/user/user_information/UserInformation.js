import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import React from "react";

export default function UserInformation() {
    return (
        <>
            <Link to={`detail`}>Detail</Link><br/>
            <Link to={`delete`}>Delete</Link>
            <Outlet></Outlet>
        </>
    )
}