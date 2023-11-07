
const MyBid = ({ myBid }) => {
    console.log(myBid);
    const { price, user_deadLine, email, buyer_email, jobId, jobTitle } = myBid

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
            <th>
                <button className="btn btn-ghost btn-xs">Pending</button>
            </th>
            <th>
                <button className="btn btn-ghost btn-xs">Complete</button>
            </th>
        </tr>

    );
};

export default MyBid;