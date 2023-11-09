
const MyBid = ({ myBid, handleComplete }) => {
    console.log(myBid);
    const { price, user_deadLine, email, buyer_email, jobId, jobTitle, _id, status } = myBid

    return (

        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold"> {jobTitle} </div>
                    </div>
                </div>
            </td>
            <td>{buyer_email}</td>
            <td>{user_deadLine}</td>
            <td>{price}</td>
            <th>
                {
                    status === 'completed' ? <p>completed</p> : <p>Pending</p> &&
                        status === 'confirm' ? <p>In Progress</p> : <p>Pending</p> &&
                            status === 'reject' ? <p>Canceled</p> : <p>Pending</p>

                }
            </th>

            <th>
                {
                    status === 'confirm' ? <button onClick={() => handleComplete(_id)} className="btn btn-ghost btn-xs">Complete</button> :
                        ''
                }

            </th>
        </tr>

    );
};

export default MyBid;



