import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllServiceCard from "../Pages/Home/Services/AllServiceCard";
import Card from "../Pages/Home/Services/Card";
import Service from "../Pages/Home/Services/Service";
import ServiceCard from "../Pages/Home/Services/ServiceCard";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Register></Register>
            },
            {
                path:'/services',
                element:<AllServiceCard></AllServiceCard>
            },
            {
                  path:'/blog',
                  
            }
        ]
    }
])
export default router;