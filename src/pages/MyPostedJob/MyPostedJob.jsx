
import MyJob from "./MyJob";
import { useLoaderData } from "react-router-dom";


const MyPostedJob = () => {
    const addJobs = useLoaderData()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">

            {
                addJobs?.map(addJob => <MyJob myJob={addJob} key={addJob._id}></MyJob>)
            }

        </div>
    );
};

export default MyPostedJob;