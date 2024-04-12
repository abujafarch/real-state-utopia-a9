import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdPhoto } from "react-icons/md";



const Register = () => {
    return (
        <div className="max-w-[430px] mx-auto rounded-md shadow-md mt-24">
            <form className="w-full">
                <h1 className="bg-[#2A9D8F] rounded-t-lg py-10 text-3xl text-white font-mont text-center font-bold">Register</h1>

                <div className="sm:px-10 px-5">
                    <div className="mt-7 flex items-center border-[#2A9D8F] border-2 rounded-sm">
                        <span className="bg-[#2A9D8F] p-2 text-2xl text-white"><FaUser></FaUser></span>
                        <input className=" outline-none max-w-[170px] sm:flex-1 py-2 px-3" type="text" name="name" placeholder="Your Name" />
                    </div>

                    <div className="mt-7 flex items-center border-[#2A9D8F] border-2 rounded-sm">
                        <span className="bg-[#2A9D8F] p-2 text-2xl text-white"><MdEmail></MdEmail></span>
                        <input className=" outline-none max-w-[170px] sm:flex-1 py-2 px-3" type="email" name="email" placeholder="Your Email" />
                    </div>

                    <div className="mt-7 flex items-center border-[#2A9D8F] border-2 rounded-sm">
                        <span className="bg-[#2A9D8F] p-2 text-2xl text-white"><MdPhoto></MdPhoto></span>
                        <input className=" outline-none max-w-[170px] sm:flex-1 py-2 px-3" type="text" name="photo" placeholder="Your Photo URL" />
                    </div>

                    <div className="mt-7 flex items-center border-[#2A9D8F] border-2 rounded-sm">
                        <span className="bg-[#2A9D8F] p-2 text-2xl text-white"><FaLock></FaLock></span>
                        <input className=" outline-none max-w-[170px] sm:flex-1 py-2 px-3" type="password" name="password" placeholder="Your Password" />
                    </div>

                    <button className="bg-[#2A9D8F] w-full py-2 rounded-sm mt-7 text-white font-poppins text-lg font-medium">Register</button>

                    <p className="py-5 text-center font-medium font-poppins">
                        Already a member? <Link to='/login' className="text-[#2A9D8F]">Login</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Register;