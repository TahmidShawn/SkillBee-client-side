import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import AddJob from "../pages/AddJob/AddJob";
import JobDetails from "../pages/JobDetails/JobDetails";
import Error from "../pages/Error/Error";
import MyPostedJob from "../pages/MyPostedJob/MyPostedJob";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyBids from "../pages/MyBids/MyBids";
import UpdateJobs from "../pages/MyPostedJob/UpdateJobs";
import BidRequest from "../pages/BidRequest/BidRequest";
import PrivateRoutes from "./PrivateRoutes";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://assignment-11-server-seven-phi.vercel.app/jobs')
            },
            {
                path: '/addJob',
                element: <PrivateRoutes><AddJob></AddJob></PrivateRoutes>
            },
            {
                path: '/jobs/:id',
                element: <PrivateRoutes><JobDetails></JobDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://assignment-11-server-seven-phi.vercel.app/jobs/${params.id}`)
            },
            {
                path: '/myPostedJobs',
                element: <PrivateRoutes><MyPostedJob></MyPostedJob></PrivateRoutes>,
                loader: () => fetch('https://assignment-11-server-seven-phi.vercel.app/jobs')
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
                path: '/myBids',
                element: <PrivateRoutes> <MyBids></MyBids></PrivateRoutes>,

            },
            {
                path: '/updateJobs/:id',
                element: <UpdateJobs></UpdateJobs>,
                loader: ({ params }) => fetch(`https://assignment-11-server-seven-phi.vercel.app/jobs/${params.id}`)
            },
            {
                path: '/bidRequests',
                element: <PrivateRoutes> <BidRequest></BidRequest></PrivateRoutes>,

            }
        ]
    }
])


export default Routes;