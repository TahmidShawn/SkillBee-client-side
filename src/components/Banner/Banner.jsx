import bg2 from './../../assets/bg2.png';

const Banner = () => {
    return (
        <div className="h-[600px] bg-contain bg-center bg-no-repeat relative" style={{ backgroundImage: `url(${bg2})` }}>
            <div className="bg-[#F5F7FA] bg-opacity-70 absolute top-0 left-0 w-full h-full"></div>
            <div className="flex flex-col items-center justify-center h-full text-center relative">
                <h1 className="text-5xl font-bold">Empower Your Journey <br /> with Skill Bee</h1>
                <p className="text-2xl mt-10">Connect with the best talent, grow your skills, and realize your dreams through Skill Bee.</p>
                <div className="flex gap-2 items-center justify-center mt-7">
                    <a href="/find-talent" className="btn btn-outline rounded-none bg-gray-800 text-white">Find Talent</a>
                    <a href="/find-work" className="btn btn-outline rounded-none bg-gray-800 text-white">Find Work</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;




