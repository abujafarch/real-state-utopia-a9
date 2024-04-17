import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdPhoto } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";


const UpdateProfile = () => {
    const { user, updateProf, setUpProfile } = useContext(AuthContext)

    const handleUpdateProfile = (e) => {
        e.preventDefault()
        const name = e.currentTarget.name.value
        const photo = e.currentTarget.photo.value
        updateProf(name, photo)
            .then(() => {
                setUpProfile(true)
                toast.success('Profile Updated Successfully')
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="max-w-[430px] mx-auto rounded-md shadow-md pb-7 mt-24">
            <Helmet>
                <title>Update Profile | Utopia</title>
            </Helmet>

            <form onSubmit={handleUpdateProfile} className="w-full">
                <h1 className="bg-[#2A9D8F] rounded-t-lg py-10 text-3xl text-white font-mont text-center font-bold">Update Profile</h1>
                <div className="flex justify-center my-5">
                    <img src={user.photoURL} className="w-[110px] h-[110px] rounded-full object-cover" />
                </div>

                <div className="sm:px-10 px-5">
                    <div className="mt-7 flex items-center border-[#2A9D8F] border-2 rounded-sm">
                        <span className="bg-[#2A9D8F] p-2 text-2xl text-white"><FaUser></FaUser></span>
                        <input className=" outline-none w-full py-2 px-3" type="text" name="name" defaultValue={user?.displayName ? user.displayName : 'No name'} />
                    </div>

                    <div className="mt-7 flex items-center border-[#2A9D8F] border-2 rounded-sm">
                        <span className="bg-[#2A9D8F] p-2 text-2xl text-white"><MdEmail></MdEmail></span>
                        <input className=" outline-none w-full py-2 px-3" type="email" name="email" defaultValue={user?.email ? user.email : 'no email'} disabled/>
                    </div>

                    <div className="mt-7 flex items-center border-[#2A9D8F] border-2 rounded-sm">
                        <span className="bg-[#2A9D8F] p-2 text-2xl text-white"><MdPhoto></MdPhoto></span>
                        <input className=" outline-none w-full py-2 px-3" type="text" name="photo" defaultValue={user?.photoURL ? user.photoURL : 'no photo url'} />
                    </div>

                    <button className="bg-[#2A9D8F] w-full py-2 rounded-sm mt-7 text-white font-poppins text-lg font-medium">Save Changes</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;