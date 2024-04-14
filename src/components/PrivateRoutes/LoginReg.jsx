import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const LoginReg = ({ children }) => {

    const { user } = useContext(AuthContext)

    return (
        <div>
            {
                user ?
                    <Navigate to='/'></Navigate>
                    : children
            }
        </div>
    );
};

export default LoginReg;