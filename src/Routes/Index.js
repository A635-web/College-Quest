import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import React, { lazy, Suspense } from 'react'
import ProtectedRoute from "./ProtectedRoute";
import Loader from "../components/loader/index"
import Dashboard from "../views/layout/Dashboard";
import ErrorBoundary from "../components/errors/ErrorHandler";

const SignUp = lazy(() => import("../views/auth/Signup"));

const Login = lazy(() => import("../views/auth/Login"))
const FileUpload = lazy(() => import("../views/auth/fileUpload"))
const Clubs= lazy(() => import("../views/auth/clubs"))
const Upload= lazy(() => import("../views/auth/Upload"))
const Socities = lazy(() => import("../views/auth/socities"))
const Dashboard1 = lazy(() => import("../views/auth/dashboard"))
const Contact = lazy(() => import("../views/auth/Contact"))
const VerifyOTP = lazy(() => import("../views/auth/VerifyOTP"))
const ForgotPassword = lazy(() => import("../views/auth/ForgotPassword"))
const NewPassword = lazy(() => import("../views/auth/NewPassword"))

const MainPage = lazy(() => import("../views/dashboardPages/HomePage"))
const DashboardProfile = lazy(() => import("../views/dashboardPages/Profile"))
const DashboardUpdates = lazy(() => import("../views/dashboardPages/UpdatesPage"))
const DashboardAbout = lazy(() => import("../views/dashboardPages/About"))
const Clubpage=lazy(()=>import("../components/common/clubPage.jsx"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/clubs",
        element: <Clubs />,
     
    },
    {
         path:"/clubs/clubpage",
         element:<Clubpage/>
    },
    {
        path: "/socities",
        element: <Socities />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
 
    {
        path: "/contact-us",
        element: <Contact/>,
    },
    {
        path: "/fileUpload",
        element: <FileUpload/>,
    },

    {
        path: "/Upload",
        element: <Upload/>,
    },
    {
        path: "/verify-otp",
        element: <VerifyOTP />,
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />,
    },
    {
        path: "/new-password",
        element: <NewPassword />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "/dashboard/updates",
                element: <DashboardUpdates />,
            },
        ],
    },
    {
        path: "/dashboard1",
        element: <Dashboard1/>,
    },
    {
        path: "/profile",
        element: <ProtectedRoute><DashboardProfile /></ProtectedRoute>,
    },
    {
        path: "/about",
        element: <DashboardAbout />,
    },
    {
        path: "*",
        element: <Login />,
    }
]);

const Routes = () => {
    return (
        <ErrorBoundary>
            <Suspense fallback={<Loader coverFullScreen={true} />}>
                <RouterProvider router={router} />
            </Suspense>
        </ErrorBoundary>
    )
}

export default Routes