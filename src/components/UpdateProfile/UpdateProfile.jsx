import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdPhoto } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const UpdateProfile = () => {
    const { user, updateProf } = useContext(AuthContext)

    const handleUpdateProfile = (e) => {
        e.preventDefault()
        const name = e.currentTarget.name.value
        const photo = e.currentTarget.photo.value
        updateProf(name, photo)
            .then(() => {
                console.log('profile updated')
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="max-w-[430px] mx-auto rounded-md shadow-md pb-7 mt-24">
            <form onSubmit={handleUpdateProfile} className="w-full">
                <h1 className="bg-[#2A9D8F] rounded-t-lg py-10 text-3xl text-white font-mont text-center font-bold">Update Profile</h1>

                <div className="sm:px-10 px-5">
                    <div className="mt-7 flex items-center border-[#2A9D8F] border-2 rounded-sm">
                        <span className="bg-[#2A9D8F] p-2 text-2xl text-white"><FaUser></FaUser></span>
                        <input className=" outline-none w-full py-2 px-3" type="text" name="name" defaultValue={user ? user.displayName : ''} />
                    </div>

                    <div className="mt-7 flex items-center border-[#2A9D8F] border-2 rounded-sm">
                        <span className="bg-[#2A9D8F] p-2 text-2xl text-white"><MdEmail></MdEmail></span>
                        <input className=" outline-none w-full py-2 px-3" type="email" name="email" defaultValue='357jafar@gmail.com' disabled/>
                    </div>

                    <div className="mt-7 flex items-center border-[#2A9D8F] border-2 rounded-sm">
                        <span className="bg-[#2A9D8F] p-2 text-2xl text-white"><MdPhoto></MdPhoto></span>
                        <input className=" outline-none w-full py-2 px-3" type="text" name="photo" defaultValue={user ? user.photoURL : ''} />
                    </div>

                    <button className="bg-[#2A9D8F] w-full py-2 rounded-sm mt-7 text-white font-poppins text-lg font-medium">Save Changes</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;