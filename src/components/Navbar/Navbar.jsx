import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const [userName, setUserName] = useState(user)

    useEffect(() => {
        setUserName(user)
    }, [user])
    
    console.log(userName)
    // console.log(userName.displayName)

    const handleLogout = () => {
        logOut()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className='flex justify-between w-full md:mt-8 mt-4 md:mb-5 items-center'>
            <div >
                <NavLink to='/'><h1 className='text-[#2a9d8f] font-extrabold text-3xl font-bungee text-left'>Utopia</h1></NavLink>
            </div>
            <div className='flex gap-5 text-lg font-medium text-[#264653] items-center'>

                <NavLink to='/'><a>Home</a></NavLink>
                {
                    user && <NavLink to='/update-profile'><a>Update Profile</a></NavLink>
                }
                {
                    user && <NavLink to='/extra'>Extra Route</NavLink>
                }
                {
                    !user ?
                        <NavLink to='/login' className='bg-[#2a9d8f] text-center px-5 py-[6px] rounded-md text-white'><a>Login</a></NavLink> :
                        <button onClick={handleLogout} className='bg-[#F4A261] text-center px-5 py-[6px] rounded-md text-white'><a>Logout</a></button>
                }



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