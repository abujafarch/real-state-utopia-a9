import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import NotFound from "../components/NotFound/NotFound";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import EstateDetails from "../components/EstateDetails/EstateDetails";
import PrivateRoutes from "../components/PrivateRoutes/PrivateRoutes";
import LoginReg from "../components/PrivateRoutes/LoginReg";
import Loader from "../components/Loader/Loader";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <LoginReg><Login></Login></LoginReg>
            },
            {
                path: '/register',
                element: <LoginReg><Register></Register></LoginReg>
            },
            {
                path: '/update-profile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '/estate-details/:currentEstateId',
                loader: () => fetch('/properties.json'),
                element: <PrivateRoutes><EstateDetails></EstateDetails></PrivateRoutes>
            }
        ]
    },
    {
        path:'/loader',
        element:<Loader></Loader>
    }
])
export default router