
import MyBid from "./MyBid";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const MyBids = () => {
    const [myBids, setMyBids] = useState([])
    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/myBids?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyBids(data))

    }, [url]);

    const handleComplete = id => {
        fetch(`http://localhost:5000/myBids/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'completed', showStatus: 'accepted' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = myBids.filter(booking => booking._id !== id);
                    const updated = myBids.find(booking => booking._id === id);
                    updated.status = 'completed'
                    updated.showStatus = 'accepted'
                    const newBookings = [updated, ...remaining];
                    setMyBids(newBookings);
                }
            })
    }

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
                            myBids.map(myBid => <MyBid key={myBid._id} handleComplete={handleComplete} myBid={myBid}></MyBid>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MyBids;