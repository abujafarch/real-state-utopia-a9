import { signOut } from "firebase/auth";
import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import auth from "../../firebase/firebase.config";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const { user } = useContext(AuthContext)

    const handleLogout = () => {
        signOut(auth)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className='flex justify-between mt-8 mb-5 items-center'>
            <div >
                <NavLink to='/'><h1 className='text-[#2a9d8f] font-extrabold text-3xl font-bungee text-left'>Utopia</h1></NavLink>
            </div>
            <div className='flex gap-5 text-lg font-medium text-[#264653] items-center'>
                <NavLink to='/'><a>Home</a></NavLink>
                <NavLink to='/update-profile'><a>Update Profile</a></NavLink>
                <NavLink to='/login' className='bg-[#2a9d8f] px-5 py-[6px] rounded-md text-white'><a>Login</a></NavLink>

                <button onClick={handleLogout} className='bg-[#F4A261] px-5 py-[6px] rounded-md text-white'><a>Logout</a></button>

                <button>
                    {
                        user ?
                            <div className="w-[35px] h-[35px] tooltip flex items-center justify-center" data-tip={user.displayName ? user.displayName : 'No Name'}>

                                <img
                                    src={user.photoURL ? user.photoURL : <p className="text-4xl tooltip flex items-center" data-tip='No photo' ><CgProfile></CgProfile></p>}
                                    className="w-full h-full object-cover border-2 rounded-full border-[#F4A261]"
                                />

                            </div>
                            : <p className="text-4xl tooltip flex items-center" data-tip='no user' >
                                <CgProfile></CgProfile>
                            </p>
                    }
                </button>
                
            </div>
        </div>
    );
};

export default Navbar;