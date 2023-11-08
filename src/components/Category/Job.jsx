import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Job = ({ job }) => {
    const { _id, deadline, title, description, minPrice, maxPrice } = job
    return (
        <div className="card bg-[#F8F9FB] border-2">
            <div className="card-body">
                <h2 className="card-title text-4xl font-bold mb-5">{title}</h2>
                <p>{description}</p>
                <div className="font-bold my-3">
                    <p>Price : {minPrice}-{maxPrice} $</p>
                    <p>Deadline : {deadline}</p>
                </div>
                <div className="card-actions mt-5">
                    <Link to={`jobs/${_id}`} className=" w-full btn btn-outline">
                        <button>Bid Now</button>
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
        minPrice: PropTypes.string.isRequired,
        maxPrice: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default Job;