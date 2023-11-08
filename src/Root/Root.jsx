import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <div><Toaster /></div>
        </div>
    );
};

export default Root;