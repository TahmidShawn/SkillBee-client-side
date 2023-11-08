

const BidReq = ({ bidReq, handleAccept, handleReject }) => {

    console.log(bidReq);
    const { price, user_deadLine, email, buyer_email, jobId, jobTitle, _id, status, showStatus } = bidReq
    console.log(_id);


    return (

        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold"> {jobTitle} </div>
                    </div>
                </div>
            </td>
            <td>{email}</td>
            <td>{user_deadLine}</td>
            <td>{price}</td>
            {/* <th>
                <button className="btn btn-ghost btn-xs">Accept</button>
            </th> */}
            <th>
                {
                    status === 'confirm' ? <p>In Progress</p> : <p>Pending</p> &&
                        status === 'reject' ? <p>Rejected</p> : <p>Pending</p>

                }
            </th>
            {/* <th>
                {
                    status === 'confirm' ? <progress className="progress progress-error w-56" value="40" max="100"></progress> :
                        <button onClick={() => handleAccept(_id)} className="btn btn-ghost btn-xs">Accept</button>
                }
            </th>

            <th>
                {
                    status === 'reject' ? <progress className="progress progress-error w-56" value="40" max="100"></progress> :
                        <button onClick={() => handleReject(_id)} className="btn btn-ghost btn-xs">reject</button>
                }
            </th> */}
            <th>
                {
                    showStatus === 'InProgress' ? <progress className="progress progress-error w-56" value="40" max="100"></progress> :
                        <div>
                            <button onClick={() => handleAccept(_id)} className="btn btn-ghost btn-xs">Accept</button>
                            <button onClick={() => handleReject(_id)} className="btn btn-ghost btn-xs">reject</button>
                        </div>
                }
            </th>
        </tr>

    );
};

export default BidReq;


