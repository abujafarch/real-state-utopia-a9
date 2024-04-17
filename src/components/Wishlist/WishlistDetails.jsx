import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { IoMdPricetag } from "react-icons/io";
import { LiaChartAreaSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { getWishlist, setWishlist } from "../LocalStorage/localStorage";


const WishlistDetails = ({ wishlist, setWishlists }) => {

    const { image_url, estate_title, segment_name, price, status, area, location, id } = wishlist
    const handleDeleteItem = () =>{
        setWishlist(wishlist)
        setWishlists(getWishlist())
    }

    return (
        <div className="border p-2 rounded-md">
            <div className="rounded-md relative">
                <img className="rounded-md w-full" src={image_url} />
                <p className="bg-[#ffffff] px-5 py-[6px] rounded-r-md w-fit text-black hover:text-[#2A9D8F] font-medium font-poppins absolute top-5 left-0 cursor-pointer">{status}</p>
                <p onClick={handleDeleteItem} className="absolute z-20 right-3 text-2xl p-2 bg-[#2A9D8F] flex items-center justify-center rounded-full top-5 text-[#f4a361cc] cursor-pointer"><MdDelete></MdDelete></p>
            </div>
            <div className=" mt-3">
                <div>
                    <p className="flex items-center gap-1 text-[#2646539f] font-medium"><IoLocationOutline></IoLocationOutline> {location}</p>
                    <h2 className="font-poppins mt-1 hover:text-[#F4A261] transition duration-300 font-semibold text-lg md:text-xl">{estate_title}</h2>
                    <p className="flex items-center gap-1 text-[#264653] font-medium"><MdOutlineCategory></MdOutlineCategory> {segment_name}</p>
                </div>

                <div className="flex justify-between mt-1">
                    <p className="flex items-center font-semibold font-mont gap-1"><IoMdPricetag className="text-lg"></IoMdPricetag> ${price}</p>
                    <p className="flex items-center font-mont gap-1"><LiaChartAreaSolid className="text-xl"></LiaChartAreaSolid> {area} sq ft</p>
                </div>

                <hr className="px-5 mt-1" />
                <div className="mt-2">
                    <Link to={`/estate-details/${id}`}>
                        <button className="bg-[#2A9D8F] border-2 border-[#2A9D8F] hover:border-[#F4A261] hover:text-[#F4A261] hover:bg-transparent px-2 text-white font-medium transition duration-300 font-mont py-[6px] rounded-md">View Property</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WishlistDetails;