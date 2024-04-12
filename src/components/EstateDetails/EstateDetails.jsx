


const EstateDetails = () => {
    return (
        <div className="sm:mt-12 mt-7">
            <div>
                <h1 className="font-poppins mb-2 font-semibold text-xl md:text-3xl">Charming Townhouse by the Park</h1>
                <div className="mb-3">
                    <p className="text-[#2A9D8F] font-medium font-mont"><span>Single Family Home</span> | <span>789 Downtown Avenue, Metro City</span></p>
                </div>
            </div>
            <div className="">
                <img src="https://i.ibb.co/XFsd2TN/single-family.jpg" className="w-full rounded-md" />
            </div>
            <div className="mt-12  max-w-2xl mx-auto">
                <h2 className="text-xl font-semibold font-poppins text-[#2A9D8F]">Property Details:</h2>
                <div className="overflow-x-auto">
                    <table className="table border border-[#cfcfcf96] p-2 mt-4">
                        <tbody className="text-base font-mont font-medium">
                            <tr>
                                <td>Price</td>
                                <td>$1500</td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td>for Rent</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>2500 sq ft</td>
                            </tr>
                            <tr>
                                <td colSpan='2'>
                                    <p className="font-semibold">Facilities:</p>
                                    <li>Study Lounges</li>
                                    <li>Fitness Center</li>
                                    <li>Communal Kitchen</li>
                                </td>
                            </tr>
                            <tr>
                                <td className="" colSpan='2'><span className="font-semibold">Description:</span> Experience the epitome of urban living in this sleek and contemporary apartment located in the vibrant heart of the city. With its stylish design and convenient amenities, this apartment offers the perfect blend of comfort and sophistication. Enjoy stunning city views and easy access to all the best restaurants, shops, and entertainment venues.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;