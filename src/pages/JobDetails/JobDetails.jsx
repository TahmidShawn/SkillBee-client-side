import { useLoaderData } from "react-router-dom";

const JobDetails = () => {

    const { deadline, priceRange, title, shortDescription } = useLoaderData()

    return (
        <div>
            <div className=" bg-[#F8F9FB] mt-10 border-2 rounded-none flex justify-around items-center pb-10">
                <div className="w-1/2 text-center space-y-10">
                    <h2 className="text-6xl font-bold mb-5">{title}</h2>
                    <p className="text-2xl">{shortDescription}</p>
                    <div className="font-bold my-5 text-2xl">
                        <p className="mb-3">Price : {priceRange}</p>
                        <p>Deadline : {deadline}</p>
                    </div>
                </div>
                <div>
                    <div className="max-w-5xl mx-auto shadow-md p-10 border-[6px] mt-10">
                        <h1 className="text-2xl font-bold text-center mb-5">Place Your Bids</h1>
                        <form>

                            <div className="relative z-0 w-80 mb-6 group">
                                <input type="number" name="floating_number" id="floating_number" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_number" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transHtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="date" name="floating_deadLine" id="floating_deadLine" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_deadLine" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transHtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="email" name="repeat_email" id="floating_repeat_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_repeat_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transHtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="email" name="repeat_email" id="floating_repeat_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_repeat_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transHtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Buyer Email</label>
                            </div>


                            <button type="submit" className="rounded-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Bid on the project</button>
                        </form>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default JobDetails;