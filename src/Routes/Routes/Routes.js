import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddServices from "../../pages/AddServices/AddServices";
import Blog from "../../pages/Blog/Blog";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Login/Register";
import MyReview from "../../pages/MyReview/MyReview";
import ServiceDetails from "../../pages/ServiceDetails/ServiceDetails";
import Services from "../../pages/Services/Services";
import Updated from "../../pages/Updated/Updated";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/services',
                element: <Services />,
                loader: () => fetch('https://quick-food-server.vercel.app/services')
            },
            {
                path: '/services/:id',
                element:  <ServiceDetails />,
                loader: ({params}) => fetch(`https://quick-food-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/myreview',
                element: <PrivateRoutes>
                    <MyReview />
                </PrivateRoutes>
            },
            {
                path: '/addservices',
                element: <PrivateRoutes>
                    <AddServices />
                </PrivateRoutes>
            },
            {
                path: '/updated/:id',
                element: <Updated />,
                loader: ({params}) => fetch(`https://quick-food-server.vercel.app/reviews/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])


