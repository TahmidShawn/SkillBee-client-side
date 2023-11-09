
import { useEffect, useState } from "react";
import MyJob from "./MyJob";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyPostedJob = () => {
    const addJob = useLoaderData()
    const [addJobs, setAddJobs] = useState([]);

    useEffect(() => {
        setAddJobs(addJob)
    }, [addJob])

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-11-server-seven-phi.vercel.app/jobs/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted',
                                'This job has been deleted',
                                'success'
                            )
                            const remaining = addJobs?.filter(addJob => addJob._id !== _id);
                            setAddJobs(remaining);
                        }
                    })

            }
        })
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl gap-10 mx-auto mt-20">
            <Helmet>
                <title>Skill Bee | My Posted Job</title>
                <meta name="description" content="Helmet application" />
            </Helmet>

            {
                addJobs?.map(addJob => <MyJob myJob={addJob} handleDelete={handleDelete} key={addJob._id}></MyJob>)
            }

        </div>
    );
};

export default MyPostedJob;