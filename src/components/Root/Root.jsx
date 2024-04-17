import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import toast, { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Loader from '../Loader/Loader';


const Root = () => {
    const { loading } = useContext(AuthContext)

    return (
        <div className='overflow-x-hidden'>
            <div className='max-w-[1440px] mx-auto px-5 md:px-5 lg:px-8'>

                <Navbar></Navbar>
                {
                    loading ? <Loader></Loader> : <Outlet></Outlet>
                }

            </div>

            {
                loading ? '' : <Footer></Footer>
            }


            <Toaster />
        </div>
    );
};

export default Root;