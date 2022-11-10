import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import AllServiceCard from "../Pages/Home/Services/AllServiceCard";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Review from "../Pages/ServiceDetails/Review/Review";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetail/ServiceDetails";


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
                  element:<Blog></Blog>
            },
            {
                path:'/services/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/review/:id',
                element:<Review></Review>,
                loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
])
export default router;