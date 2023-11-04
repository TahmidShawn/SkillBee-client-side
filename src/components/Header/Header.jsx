import Navbar from "../Navbar/Navbar";
// import backgroundImage from './../../assets/bg.png'
// style={{ backgroundImage: `url(${backgroundImage})` }}

const Header = () => {
    return (
        <div className="bg-cover bg-no-repeat bg-center h-screen" >
            <Navbar />
        </div>
    );
};

export default Header;