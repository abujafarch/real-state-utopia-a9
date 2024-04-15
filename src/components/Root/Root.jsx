import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import toast, { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Loader from '../Loader/Loader';


const Root = () => {
    const { loading } = useContext(AuthContext)

    if (loading) {
        return <Loader></Loader>
    }
    return (
        <div className=''>
            <div className='max-w-[1440px] mx-auto px-3 md:px-4 lg:px-5'>

                <Navbar></Navbar>
                <Outlet></Outlet>

            </div>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default Root;