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


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/jobs')
            },
            {
                path: '/addJob',
                element: <AddJob></AddJob>
            },
            {
                path: '/jobs/:id',
                element: <JobDetails></JobDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: '/myPostedJobs',
                element: <MyPostedJob></MyPostedJob>,
                loader: () => fetch('http://localhost:5000/jobs')
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
                element: <MyBids></MyBids>,
            },
            {
                path: '/updateJobs/:id',
                element: <UpdateJobs></UpdateJobs>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
        ]
    }
])


export default Routes;