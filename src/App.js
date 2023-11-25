import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import ListUser from "./pages/user/ListUser";
import UserInformation from "./pages/user/user_information/UserInformation";
import {UserDetail} from "./pages/user/user_information/detail/UserDetail";
import DeleteForm from "./pages/user/user_information/delete_form/DeleteForm";
import CreateUser from "./pages/user/create_user/CreateUser";
import ListTour from "./pages/tour/ListTour";
import CreateTour from "./pages/tour/create_tour/CreateTour";
import TourInformation from "./pages/tour/tour_information/TourInformation";
import {TourDetail} from "./pages/tour/tour_information/detail_form/TourDetail";
import DeleteTourForm from "./pages/tour/tour_information/delete_form/DeleteTourForm";
import EditTourForm from "./pages/tour/tour_information/edit_form/TourEdit";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/list-tour" element={<ListTour/>}/>
            <Route path="/create_form" element={<CreateTour/>}/>
            <Route path="/information/:id" element={<TourInformation/>}>
                <Route path="detail" element={<TourDetail/>}></Route>
                <Route path="delete" element={<DeleteTourForm/>}></Route>
                <Route path="edit" element={<EditTourForm/>}></Route>
            </Route>
        </Routes>
    );
}

export default App;
