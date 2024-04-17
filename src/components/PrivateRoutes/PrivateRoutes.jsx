import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";

const PrivateRoutes = ({ children }) => {

    const { loading } = useContext(AuthContext)
    const { pathname } = useLocation()

    const { user } = useContext(AuthContext)
    return (
        <div>
            {
                loading ? <Loader></Loader> : user ? children :
                    <Navigate to='/login' state={pathname}></Navigate>
            }
        </div>
    );
};

export default PrivateRoutes;