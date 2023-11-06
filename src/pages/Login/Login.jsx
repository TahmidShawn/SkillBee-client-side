import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
    return (
        <div className="bg-[#F5F7FA] py-8">
            <h2 className='text-4xl font-bold text-center'>Login</h2>
            <div className="card flex-shrink-0 w-full mx-auto max-w-2xl shadow-2xl bg-base-100 mt-10">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label mt-4">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <h2 className="my-3 text-center">Do not have an account?  <span><Link className="text-blue-800 font-bold ml-1" to='/register'>Register</Link></span> </h2>

                    <div className="flex items-center">
                        <Link className="w-full btn btn-outline btn-primary">
                            <button className="flex justify-center items-center gap-2 font-bold text-md"> <FcGoogle className="text-2xl"/>Continue with Google </button>
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Login;