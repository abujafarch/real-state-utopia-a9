import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BiLogoGithub } from "react-icons/bi";
import { Link } from "react-router-dom";



const Login = () => {
    return (
        <div className="max-w-[430px] mx-auto rounded-md shadow-md mt-24">
            <form className="w-full">
                <h1 className="bg-[#2A9D8F] rounded-t-lg py-10 text-3xl text-white font-mont text-center font-bold">Login</h1>

                <div className="sm:px-10 px-5">
                    <div className="mt-7 flex items-center border-[#2A9D8F] border-2 rounded-sm">
                        <span className="bg-[#2A9D8F] p-2 text-2xl text-white"><MdEmail></MdEmail></span>
                        <input className=" outline-none w-full py-2 px-3" type="email" name="email" placeholder="Your Email" />
                    </div>

                    <div className="mt-7 flex items-center border-[#2A9D8F] border-2 rounded-sm">
                        <span className="bg-[#2A9D8F] p-2 text-2xl text-white"><FaLock></FaLock></span>
                        <input className=" outline-none w-full py-2 px-3" type="password" name="password" placeholder="Your Password" />
                    </div>

                    <button className="bg-[#2A9D8F] w-full py-2 rounded-sm mt-7 text-white font-poppins text-lg font-medium">Login</button>

                    <p className="my-4 text-center font-poppins font-medium">or Login with</p>

                    <div className="flex gap-2 sm:gap-4 items-center justify-center">
                        <button className="border-[#2A9D8F] px-1 border-2 flex gap-2 items-center justify-center py-[6px] flex-1 rounded-sm font-poppins font-medium"><FcGoogle className="text-3xl"></FcGoogle> Google</button>

                        <button className="border-[#2A9D8F] px-1 border-2 flex gap-2 items-center justify-center py-[6px] rounded-sm font-poppins flex-1 font-medium"><BiLogoGithub className="text-3xl text-[#1F2328]"></BiLogoGithub>GitHub</button>
                    </div>
                    <p className="py-5 text-center font-medium font-poppins">
                        Not a member? <Link to='/register' className="text-[#2A9D8F]">Register</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;