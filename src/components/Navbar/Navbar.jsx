import logo from './../../assets/logo.png'
import { FaUser } from 'react-icons/fa';
import NavLinks from "./NavLinks";
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result);
                toast.success('LogOut Successfully Done!');
            })
            .catch(error => {
                console.log(error);
            })
    }

    const links = <>
        <NavLinks></NavLinks>
    </>

    return (

        <nav className="navbar bg-[#F5F7FA] px-4">

            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 w-52 bg-white rounded-md">
                        {links}
                    </ul>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <img src={logo} alt="" className="w-12 h-12" />
                    <h2 className="text-2xl font-bold text-gray-700">SKILL BEE</h2>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end">
                <div className="dropdown dropdown-end gap-5">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar bg-gray-200">
                        <div className="rounded-full">
                            {
                                user?.photoURL ? <img src={user.photoURL} alt="" /> :
                                    <p className="text-4xl text-center"><FaUser /></p>
                                // <img src={user.photo} alt="" />
                            }

                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                {
                                    user?.email ? <p>{user.displayName || 'user'}</p> :
                                        <p>New</p>
                                }

                            </a>
                        </li>
                        <li>
                            {
                                user ?
                                    <button onClick={handleLogOut}>LogOut</button>
                                    :
                                    <Link to='/login'> <button>LogIn</button></Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>

        </nav>

    );
};

export default Navbar;

// SkillBee