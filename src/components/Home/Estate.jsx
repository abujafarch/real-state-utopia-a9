import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { IoMdPricetag } from "react-icons/io";
import { LiaChartAreaSolid } from "react-icons/lia";



const Estate = ({ estate }) => {
    // console.log(estate)
    const { image_url, estate_title, segment_name, description, price, status, area, location, facilities } = estate
    return (
        <div className="border p-2 rounded-md">
            <div className="rounded-md relative">
                <img className="rounded-md w-full" src={image_url} />
                <p className="bg-[#ffffff] px-5 py-[6px] rounded-r-md w-fit text-black hover:text-[#2A9D8F] font-medium font-poppins absolute top-5 left-0 cursor-pointer">{status}</p>
            </div>
            <div>
                <p className="flex items-center gap-1 mt-5 text-[#2646539f] font-medium"><IoLocationOutline></IoLocationOutline> {location}</p>
                <h2 className="font-poppins mt-2 hover:text-[#F4A261] transition duration-300 font-semibold text-xl md:text-2xl">{estate_title}</h2>
                <p className="flex items-center gap-1 mt-2 text-[#264653] font-medium text-lg"><MdOutlineCategory></MdOutlineCategory> {segment_name}</p>
            </div>

            <div className="flex justify-between mt-3">
                <p className="flex items-center text-lg md:text-xl font-semibold font-mont gap-1"><IoMdPricetag className=" text-xl md:text-2xl"></IoMdPricetag> ${price}</p>
                <p className="flex items-center text-base md:text-lg font-mont gap-1"><LiaChartAreaSolid className="text-xl"></LiaChartAreaSolid> {area} sq ft</p>
            </div>

            <hr className="px-5 my-3" />

            <div>
                <h3 className="text-[#] font-bold text-lg font-mont">Facilities:</h3>
                <div className="">
                    {
                        facilities.map((facility, indx) => <li className="mr-2 font-medium text-[#2A9D8F] font-mont" key={indx}>{facility}</li>)
                    }
                </div>
            </div>
            <hr className="my-3" />

            <p className="mt-3 text-[#616161] font-medium font-mont">
                {
                    description.length > 100 ? `${description.slice(0, 100)}...` : description
                }
            </p>
            <div className="mt-3">
                <button className="bg-[#2A9D8F] border-2 border-[#2A9D8F] hover:border-[#F4A261] hover:text-[#F4A261] hover:bg-transparent px-3 text-white font-medium transition duration-300 font-mont py-2 rounded-md">View Property</button>
            </div>
        </div>
    );
};

export default Estate;