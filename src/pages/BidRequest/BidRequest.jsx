import {  useEffect, useState, } from "react";
import BidReq from "./BidReq";
import { Helmet } from "react-helmet";

const BidRequest = () => {
    const [bidRequest, setBidRequest] = useState([])


    const url = 'https://assignment-11-server-seven-phi.vercel.app/myBids'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBidRequest(data))

    }, [url]);

    const handleAccept = id => {
        fetch(`https://assignment-11-server-seven-phi.vercel.app/myBids/${id}`, {
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
        fetch(`https://assignment-11-server-seven-phi.vercel.app/myBids/${id}`, {
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
            <Helmet>
                <title>Skill Bee | Bid Request</title>
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