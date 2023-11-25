import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import React from "react";

export default function TourInformation() {
    return (
        <>
            <Link to={`detail`}>Detail</Link><br/>
            <Link to={`delete`}>Delete</Link><br/>
            <Link to={`edit`}>Edit</Link><br/>
            <Link to={`/list-tour`}>Home</Link>
            <Outlet></Outlet>
        </>
    )
}