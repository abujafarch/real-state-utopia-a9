import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {

    const {pathname} = useLocation()
    console.log(pathname)

    const { user } = useContext(AuthContext)
    return (
        <div>
            {
                user ? children : 
                <Navigate to='/login' state={pathname}></Navigate>
            }
        </div>
    );
};

export default PrivateRoutes;