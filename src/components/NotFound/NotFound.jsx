import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col px-5 justify-center items-center min-h-screen">
            <Helmet>
                <title>Not Found | Utopia</title>
            </Helmet>
            <h1 className="text-3xl font-poppins font-medium text-[#E76F51] mb-5 text-center">The page you are looking for was not found</h1>
            <Link to='/'>
                <button className='bg-[#E76F51] px-3 py-2 font-mont rounded-md text-white font-semibold text-lg'>Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;