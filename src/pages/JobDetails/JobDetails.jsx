import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const JobDetails = () => {
    const navigate = useNavigate();
    const { deadline, minPrice, maxPrice, title, description, buyerEmail } = useLoaderData()
    const { user } = useContext(AuthContext)
    console.log(user);

    const handleBids = event => {
        event.preventDefault()
        const form = event.target
        const price = form.price.value
        const user_deadLine = form.user_deadLine.value
        const email = form.user_email.value
        const buyer_email = form.buyer_email.value


        const myBids = {
            price, user_deadLine, email, buyer_email, jobTitle: title,
        }
        console.log(myBids);

        fetch('http://localhost:5000/myBids', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myBids)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Bid placed Successfully',
                        icon: 'success',
                        confirmButtonText: 'See My Bids'
                    })
                        .then(() => {
                            navigate('/myBids');
                        });
                }
            })

    }

    return (
        <div>
            <div className=" bg-[#F8F9FB] mt-10 border-2 rounded-none flex justify-around items-center pb-10">
                <div className="w-1/2 text-center space-y-10">
                    <h2 name="title" className="text-6xl font-bold mb-5">{title}</h2>
                    <p className="text-2xl">{description}</p>
                    <div className="font-bold my-5 text-2xl">
                        <p className="mb-3">Price : {minPrice}-{maxPrice} $</p>
                        <p>Deadline : {deadline}</p>
                    </div>
                </div>
                <div>
                    <div className="max-w-5xl mx-auto shadow-md p-10 border-[6px] mt-10">
                        <h1 className="text-2xl font-bold text-center mb-5">Place Your Bids</h1>
                        <form onSubmit={handleBids}>

                            <div className="relative z-0 w-80 mb-6 group">
                                <input type="number" name="price" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transHtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="date" name="user_deadLine" id="user_deadLine" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="user_deadLine" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transHtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">DeadLine</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="email" name="user_email" id="user_email" defaultValue={user?.email} readOnly className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="user_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transHtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="email" name="buyer_email" defaultValue={buyerEmail} readOnly id="buyer_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="buyer_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transHtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Buyer Email</label>
                            </div>

                            {
                                buyerEmail === user?.email ?
                                    <input type="submit" disabled className="disabled:bg-gray-500 rounded-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="Bid on the project" />
                                    :
                                    <input type="submit" className="rounded-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="Bid on the project" />
                            }
                        </form>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default JobDetails;