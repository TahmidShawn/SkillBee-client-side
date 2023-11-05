import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import AddJob from "../pages/AddJob/AddJob";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/job')
            },
            {
                path: '/addJob',
                element: <AddJob></AddJob>
            }
        ]
    }
])


export default Routes;