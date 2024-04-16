import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import NotFound from "../components/NotFound/NotFound";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import EstateDetails from "../components/EstateDetails/EstateDetails";
import PrivateRoutes from "../components/PrivateRoutes/PrivateRoutes";
import Wishlist from "../components/Wishlist/Wishlist";

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
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/update-profile',
                element:<PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>
            },
            {
                path: '/estate-details/:currentEstateId',
                loader: () => fetch('/properties.json'),
                element: <PrivateRoutes><EstateDetails></EstateDetails></PrivateRoutes>
            },
            {
                path:'/wishlist',
                element: <Wishlist></Wishlist>
            }
        ]
    }
])
export default router