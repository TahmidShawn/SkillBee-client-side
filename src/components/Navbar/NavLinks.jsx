import { NavLink } from "react-router-dom";

const NavLinks = () => {
    return (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/addJob"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Add Job
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/myPostedJobs"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    My Posted Jobs
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/myBids"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    My Bids
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/bidRequests"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Bid Requests
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Login
                </NavLink>
            </li>
        </>
    );
};

export default NavLinks;