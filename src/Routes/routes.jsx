import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import NeedVolunteer from "../pages/NeedVolunteer/NeedVolunteer";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddVolunteerPost from "../pages/AddVounteerPost/AddVolunteerPost";
import ManageMyPost from "../pages/ManageMyPost/ManageMyPost";
import MyProfile from "../pages/MyProfile/MyProfile";
import NeedVolunteerPost from "../pages/NeedVolunteerPost/NeedVolunteerPost";
import BeVolunteer from "../pages/BeVolunteer/BeVolunteer";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/need-volunteer',
                element: <NeedVolunteer></NeedVolunteer>
            },
            {
                path: '/my-profile',
                element: <MyProfile></MyProfile>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/add-volunteer-post',
                element: <AddVolunteerPost></AddVolunteerPost>
            },
            {
                path: '/manage-my-post',
                element: <ManageMyPost></ManageMyPost>
            },
            {
                path: '/volunteerDetails/:id',
                element: <NeedVolunteerPost></NeedVolunteerPost>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/organizers/${params.id}`)
            },
            {
                path: '/beVolunteer/:id',
                element: <BeVolunteer></BeVolunteer>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/organizers/${params.id}`)
            }
            
        ]
    }
]);

export default router;