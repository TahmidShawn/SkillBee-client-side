/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";


const MyJob = ({ myJob, handleDelete }) => {
    console.log(myJob);

    const { _id, description, deadline, category, minPrice, maxPrice, buyerEmail, title } = myJob
    console.log(buyerEmail);
    const { user } = useContext(AuthContext)




    if (buyerEmail === user?.email) {
        return (
            <div className="card bg-[#F8F9FB] shadow-xl mt-10 border-2 text-center" >
                <div className="card-body">
                    <h2 className="text-3xl font-bold mb-5">Job Title : {title}</h2>
                    <h2>Email : {buyerEmail}</h2>
                    <p>Description : {description}</p>
                    <p>Category : {category}</p>
                    <div className="font-bold my-3">
                        <p>Minimum Price : {minPrice}</p>
                        <p>Maximum Price : {maxPrice}</p>
                        <p>Deadline : {deadline}</p>
                    </div>
                    <div className="flex justify-center gap-4">
                        <Link to={`/updateJobs/${_id}`}><button className="btn btn-success">Update</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn btn-warning">Delete</button>
                    </div>
                </div>
            </div>
        );
    }

};

export default MyJob;