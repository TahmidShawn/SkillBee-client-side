import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet";

const AddJob = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)
    const handleAddJob = event => {


        // get form information 

        event.preventDefault()
        const form = event.target

        const buyerEmail = form.email.value
        const title = form.title.value
        const description = form.description.value
        const deadline = form.deadline.value
        const category = form.category.value
        const minPrice = form.minPrice.value
        const maxPrice = form.maxPrice.value

        const newJob = {
            buyerEmail, title, description, deadline, category, minPrice, maxPrice
        }
        console.log(newJob);

        // send newJob data to server 

        fetch('https://assignment-11-server-seven-phi.vercel.app/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Job Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'See My Posted Job'
                    })
                        .then(() => {
                            navigate('/myPostedJobs');
                        });
                }
            })

    }

    return (
        <div className="mt-10">
               <Helmet>
                <title>Skill Bee | Add Jobs</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <h1 className="text-center text-4xl font-bold">Add Your Job</h1>
            <div className="max-w-5xl mx-auto shadow-md p-10 border-[6px] mt-10">

                <form onSubmit={handleAddJob}>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="email" name="buyerEmail" id="email" readOnly className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={user?.email} placeholder=" " required />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transHtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="title" id="title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transHtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Job Title</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="description" id="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transHtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="date" name="deadline" id="deadline" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                            <label htmlFor="deadline" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transHtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">

                            <label htmlFor="category" className="sr-only">Underline select</label>
                            <select id="category" name="category" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                <option >Category</option>
                                <option >Web Design</option>
                                <option >Graphics Design</option>
                                <option >Digital Marketing</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="number" name="minPrice" id="minPrice" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="minPrice" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transHtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Minimum Price</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="number" name="maxPrice" id="maxPrice" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="maxPrice" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transHtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Maximum Price</label>
                        </div>

                    </div>

                    <div className="w-full border-2 flex justify-center">
                        <input
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[400px] sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            value="Submit"
                        />
                    </div>


                </form>
            </div>

        </div>
    );
};

export default AddJob;

