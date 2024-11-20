import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import NeedVolunteer from "../pages/NeedVolunteer/NeedVolunteer";
import Login from "../pages/Login/Login";


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
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
]);

export default router;