import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";


const EstateDetails = () => {

    const estates = useLoaderData()
    const { currentEstateId } = useParams()

    const currentEstate = estates.find(estate => estate.id == currentEstateId)
    console.log(currentEstate)

    const { image_url, estate_title, segment_name, description, price, status, area, location, facilities} = currentEstate

    return (
        <div className="sm:mt-12 mt-7">
            <Helmet>
                <title>{estate_title}</title>
            </Helmet>
            <div>
                <h1 className="font-poppins mb-2 font-semibold text-xl md:text-3xl">{estate_title}</h1>
                <div className="mb-3">
                    <p className="text-[#2A9D8F] font-medium font-mont"><span>{segment_name}</span> | <span>{location}</span></p>
                </div>
            </div>
            <div className="">
                <img src={image_url} className="w-full rounded-md" />
            </div>
            <div className="mt-12  max-w-2xl mx-auto">
                <h2 className="text-xl font-semibold font-poppins text-[#2A9D8F]">Property Details:</h2>
                <div className="overflow-x-auto">
                    <table className="table border border-[#cfcfcf96] p-2 mt-4">
                        <tbody className="text-base font-mont font-medium">
                            <tr>
                                <td>Price</td>
                                <td>${price}</td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td>for {status}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>{area} sq ft</td>
                            </tr>
                            <tr>
                                <td colSpan='2'>
                                    <p className="font-semibold">Facilities:</p>
                                    {
                                        facilities.map((facility, indx) => <li className="mr-2 font-medium font-mont" key={indx}>{facility}</li>)
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td className="" colSpan='2'><span className="font-semibold">Description:</span> {description}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;