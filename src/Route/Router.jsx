import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import All_treatment from "../Pages/All_treatment";
import Login from "../Pages/Login";
import My_appoinments from "../Pages/My_appoinments";
import Profile from "../Pages/Profile";
import Details from "../Components/Details";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => {
                   const service_res = await fetch ('../Service.json');
                   const service_data = await service_res.json();

                   const feedback_res = await fetch ('../Feedback.json');
                   const feedback_data = await feedback_res.json();

                   return {service_data, feedback_data};
                }
                
                
            },
            {
                path: '/all-treatments',
                element: <All_treatment></All_treatment>,
                loader: () => fetch ('../Service.json')
            },
            {
                path: '/my-appoinments',
                element: <My_appoinments></My_appoinments>
            },
            {
                path: 'details/:id',
                element: <Details></Details>,
                loader: async ({params}) => {
                    const res = await fetch ('../Service.json');
                    const data = await res.json();
                    const signle_data = data.find((data) => data.id == params.id);
                    return signle_data;
                }
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/login',
                element: <Login></Login>
            }

        ]
    }
]);

export default router;