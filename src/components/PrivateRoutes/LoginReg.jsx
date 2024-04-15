import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";

const LoginReg = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location)

    return (
        <div>
            {/* {
                loading? <Loader></Loader> : user ? <Navigate to='/'></Navigate> : children
            } */}
            
            {/* {
                loading ? <Loader></Loader> : user ? location?.state ? <Navigate to={location.state}></Navigate> : <Navigate to='/'></Navigate> : children
            } */}
        </div>
    );
};

export default LoginReg;