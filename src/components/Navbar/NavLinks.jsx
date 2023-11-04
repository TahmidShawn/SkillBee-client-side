import { NavLink } from "react-router-dom";

const NavLinks = () => {
    return (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " " : ""
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/addJob"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "" : ""
                    }
                >
                    Add Job
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/myPostedJobs"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "" : ""
                    }
                >
                    My Posted Jobs
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/myBids"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "" : ""
                    }
                >
                    My Bids
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/bidRequests"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "" : ""
                    }
                >
                    Bid Requests
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "" : ""
                    }
                >
                    Login
                </NavLink>
            </li>
        </>
    );
};

export default NavLinks;