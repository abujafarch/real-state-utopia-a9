import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MdPhoto } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { Helmet } from "react-helmet-async";



const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const { createUser, setUpProfile, setLoading } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.currentTarget.name.value
        const email = e.currentTarget.email.value
        const photo = e.currentTarget.photo.value
        const password = e.currentTarget.password.value

        const pattern = /^(?=.*[a-z])(?=.*[A-Z])/;

        if (!pattern.test(password) || password.length < 6) {
            toast.error('You have missed 6 letters or at least one uppercase letter or one lowercase letter in your password.')
            return
        }

        createUser(email, password)
            .then(() => {
                toast.success('Registration Successful')
                navigate('/')
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        setUpProfile(true)
                        
                    })
                    .catch((error) => {
                        console.error(error);
                    })
            })
            .catch(() => {
                setLoading(false)
                toast.error('Account Already Exist with this email or network error');
            })
    }

    return (
        <div className="max-w-[430px] mx-auto rounded-md shadow-md mt-24">
            <Helmet>
                <title>Register | Utopia</title>
            </Helmet>

            <form onSubmit={handleRegister} className="w-full">
                <h1 className="bg-[#2A9D8F] rounded-t-lg py-10 text-3xl text-white font-mont text-center font-bold">Register</h1>

                <div className="sm:px-10 px-5">
                    <div className="mt-7 flex items-center border-[#2A9D8F] border-2 rounded-sm">
                        <span className="bg-[#2A9D8F] p-2 text-2xl text-white"><FaUser></FaUser></span>
                        <input className=" outline-none w-full py-2 px-3" type="text" name="name" placeholder="Your Name" required />
                    </div>

                    <div className="mt-7 flex items-center border-[#2A9D8F] border-2 rounded-sm">
                        <span className="bg-[#2A9D8F] p-2 text-2xl text-white"><MdEmail></MdEmail></span>
                        <input className=" outline-none w-full py-2 px-3" type="email" name="email" placeholder="Your Email" required />
                    </div>

                    <div className="mt-7 flex items-center border-[#2A9D8F] border-2 rounded-sm">
                        <span className="bg-[#2A9D8F] p-2 text-2xl text-white"><MdPhoto></MdPhoto></span>
                        <input className=" outline-none w-full py-2 px-3" type="text" name="photo" placeholder="Your Photo URL" required />
                    </div>

                    <div className="mt-7 flex items-center border-[#2A9D8F] border-2 rounded-sm">
                        <span className="bg-[#2A9D8F] p-2 text-2xl text-white"><FaLock></FaLock></span>
                        <input className=" outline-none w-full py-2 px-3" type={showPassword ? 'text' : 'password'} name="password" placeholder="Your Password" required />

                        <button onClick={(e) => {
                            e.preventDefault()
                            setShowPassword(!showPassword)
                        }} className="text-xl text-[#2A9D8F] pr-2">

                            {
                                showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                            }

                        </button>
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