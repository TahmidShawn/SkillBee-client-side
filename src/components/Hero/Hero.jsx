import { Link } from 'react-router-dom';
import img from './../../assets/hero.jpg'

const Hero = () => {
    return (
        <div className="hero min-h-[600px] mt-20" style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Find the right service and Forget the old rules. You can have the best people.
                        Right now. Right here.</p>
                    <Link to='/register'> <button className="btn bg-slate-600 text-white hover:text-black">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;