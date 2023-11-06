
import MyBid from "./MyBid";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyBids = () => {
    const [myBids, setBookings] = useState([])
    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/myBids?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))



    }, [url]);

    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Job Title</th>
                            <th>Email</th>
                            <th>DeadLine</th>
                            <th>Status</th>
                            <th>Confirmation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myBids.map(myBid => <MyBid key={myBid._id} myBid={myBid}></MyBid>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MyBids;