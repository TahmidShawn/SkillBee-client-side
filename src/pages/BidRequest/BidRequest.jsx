import { useContext, useEffect, useState, } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BidReq from "./BidReq";

const BidRequest = () => {
    const [bidRequest, setBidRequest] = useState([])
    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/myBids?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBidRequest(data))

    }, [url]);

    const handleAccept = id => {
        fetch(`http://localhost:5000/myBids/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm', showStatus: 'accepted' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = bidRequest.filter(booking => booking._id !== id);
                    const updated = bidRequest.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    updated.showStatus = 'accepted'
                    const newBidRequest = [updated, ...remaining];
                    setBidRequest(newBidRequest);
                }
            })
    }
    const handleReject = id => {
        fetch(`http://localhost:5000/myBids/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'reject', showStatus: 'accepted' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = bidRequest.filter(booking => booking._id !== id);
                    const updated = bidRequest.find(booking => booking._id === id);
                    updated.status = 'reject'
                    updated.showStatus = 'accepted'
                    const newBidRequest = [updated, ...remaining];
                    setBidRequest(newBidRequest);
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
                            <th>Price</th>
                            <th>Status</th>
                            <th>Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bidRequest.map(bidReq => <BidReq bidReq={bidReq} handleReject={handleReject} handleAccept={handleAccept} key={bidReq._id}></BidReq>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default BidRequest;