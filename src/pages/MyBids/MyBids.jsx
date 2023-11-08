
import MyBid from "./MyBid";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet";


const MyBids = () => {
    const [myBids, setMyBids] = useState([])
    const { user } = useContext(AuthContext)

    const url = `https://assignment-11-server-seven-phi.vercel.app/myBids?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyBids(data))

    }, [url]);

    const handleComplete = id => {
        fetch(`https://assignment-11-server-seven-phi.vercel.app/myBids/${id}`, {
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
                    const newMyBids = [updated, ...remaining];
                    setMyBids(newMyBids);
                }
            })
    }

    return (
        <div>
            <Helmet>
                <title>Skill Bee | My Bids</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
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