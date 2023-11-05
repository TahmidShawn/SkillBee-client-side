import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import AddJob from "../pages/AddJob/AddJob";
import JobDetails from "../pages/JobDetails/JobDetails";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
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
            }
        ]
    }
])


export default Routes;