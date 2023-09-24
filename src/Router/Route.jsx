import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Donation from "../Pages/Donation/Donation";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Statistics from "../Pages/Statistics/Statistics";





const myCreateRoute = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,

        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader:()=>fetch('/donation.json')
            },
            {
                path:'/donation',
                element: <Donation></Donation>,
            },
            {
                path:'/statistics',
                element: <Statistics></Statistics>,
            },
        ]
    }
])

export default myCreateRoute;