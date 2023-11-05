import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Job = ({ job }) => {
    const { _id, deadline, priceRange, title, shortDescription } = job
    return (
        <div className="card bg-[#F8F9FB] shadow-xl mt-10 border-2">
            <div className="card-body">
                <h2 className="card-title text-4xl font-bold mb-5">{title}</h2>
                <p>{shortDescription}</p>
                <div className="font-bold my-3">
                    <p>Price : {priceRange}</p>
                    <p>Deadline : {deadline}</p>
                </div>
                <div className="card-actions mt-5">
                    <Link to={`category/${_id}`} className=" w-full btn btn-outline">
                        <button>Buy Now</button>
                    </Link>
                </div>
            </div>
        </div >
    );
};


Job.propTypes = {
    job: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        deadline: PropTypes.string.isRequired,
        priceRange: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        shortDescription: PropTypes.string.isRequired,
    }).isRequired,
};

export default Job;