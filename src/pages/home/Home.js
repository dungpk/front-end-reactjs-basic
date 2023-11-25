import {Link, Outlet} from "react-router-dom";

export default function Home(){

    return(
        <>
            <Link to={'login'}>Log In</Link>
            <Outlet></Outlet>
        </>
    )
}