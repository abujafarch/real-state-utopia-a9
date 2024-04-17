import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";



const Navbar = () => {
    const { user, logOut, loading } = useContext(AuthContext)
    const [userName, setUserName] = useState(user)
    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenuClose = () => {
        setMenuOpen(false)
    }
    const handleMenuOpen = () => {
        setMenuOpen(true)
    }

    useEffect(() => {
        setUserName(user)
    }, [user])

    console.log(userName)

    const handleLogout = () => {
        handleMenuClose()
        logOut()
            .then(() => {
                toast.success('successfully logged out')
            })
            .catch(() => {
                toast.success('something is wrong');
            })
    }

    return (
        <div className='flex justify-between w-full md:mt-8 mt-4 md:mb-5 items-center'>
            <button onClick={handleMenuOpen} className="text-2xl sm:hidden cursor-pointer p-1">
                <HiMenu></HiMenu>
            </button>
            <div>
                <NavLink to='/'><h1 className='text-[#2a9d8f] font-extrabold text-3xl font-bungee text-left'>Utopia</h1></NavLink>
            </div>
            {
                loading ?
                    <div className="flex gap-5 items-center">
                        <div className="skeleton w-28 h-10 rounded-md sm:flex hidden"></div>
                        <div className="skeleton w-28 h-10 rounded-md sm:flex hidden"></div>
                        <div className="skeleton w-28 h-10 rounded-md sm:flex hidden"></div>
                        <div className="skeleton w-9 h-9 rounded-full"></div>
                    </div> :

                    <div className='flex gap-5 text-lg font-medium text-[#264653] items-center'>

                        <div className={`flex sm:flex-row flex-col sm:static fixed top-0 ${menuOpen ? 'left-0' : '-left-64'} sm:transition-none transition-all duration-400 z-20 bg-white sm:p-0 p-5 sm:h-fit h-screen sm:gap-5 gap-4 text-lg font-medium text-[#264653] sm:items-center sm:w-full w-60 sm:shadow-none shadow-2xl`}>

                            <button onClick={handleMenuClose} className="text-2xl sm:hidden flex justify-end">
                                <RxCross2></RxCross2>
                            </button>
                            <NavLink onClick={handleMenuClose} to='/'><a>Home</a></NavLink>

                            {
                                user && <NavLink onClick={handleMenuClose} to='/update-profile'><a>Update Profile</a></NavLink>
                                
                            }
                            {
                                user && <NavLink onClick={handleMenuClose} to='/wishlist'>Wishlists</NavLink>
                            }
                            {
                                !user ?
                                    <NavLink to='/login' onClick={handleMenuClose} className='bg-[#2a9d8f] text-center px-5 py-[6px] rounded-md text-white w-fit'><a>Login</a></NavLink> :
                                    <button onClick={handleLogout}  className='bg-[#F4A261] text-center px-5 py-[6px] rounded-md text-white w-fit'><a>Logout</a></button>
                            }
                        </div>

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
            }
        </div>
    );
};

export default Navbar;