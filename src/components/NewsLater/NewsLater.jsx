
const NewsLater = () => {
    return (
        <div className="bg-gray-600 text-white flex flex-col justify-center items-center p-10 mt-10">
            <h2 className="text-3xl font-bold">Job Newsletter from Skill Bee</h2>
            <p className="mt-7 text-center">Hear from our seasoned event experts when you subscribe to the newsletter. Access our <br /> eBooks and guides, industry trends, and latest jobs updates.</p>
            <input className="w-1/2 p-2 mt-6 rounded-sm text-black" type="email" name="" id="" placeholder="Email" />
            {/* <button className="btn ">Submit</button> */}
            {/* The button to open modal */}
            <label htmlFor="my_modal_7" className="btn bg-white mt-5 px-10 font-bold">Submit</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal text-black">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">Great!</h3>
                    <p className="py-4">You have successfully subscribe</p>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </div>
    );
};

export default NewsLater;