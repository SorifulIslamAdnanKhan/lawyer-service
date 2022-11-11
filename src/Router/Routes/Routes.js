import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layouts/Main';
import Error from '../../Error/Error';
import Home from '../../Pages/Home/Home';
import Services from '../../Pages/AllServices/AllServices';
import Reviews from '../../Pages/Reviews/Reviews';
import Blog from '../../Pages/Blog/Blog';
import Login from '../../Login/Login';
import Signup from '../../Signup/Signup';
import AddService from '../../Pages/AddService/AddService';
import AllServices from '../../Pages/AllServices/AllServices';
import ServiceDetails from '../../Pages/ServiceDetails/ServiceDetails';

  export const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            errorElement: <Error></Error>,
            children:[
                {
                    path: '/',
                    element: <Home></Home>,
                    loader:()=> fetch(`https://akl-lawyer-service-server.vercel.app/services`)
                },
                {
                    path: '/add-service',
                    element: <AddService></AddService>
                },
                {
                    path: '/all-services',
                    element: <AllServices></AllServices>,
                    loader: ()=> fetch(`https://akl-lawyer-service-server.vercel.app/all-services`)
                },
                {
                    path: '/service-details/:id',
                    element: <ServiceDetails></ServiceDetails>,
                    loader: ({params})=> fetch(`https://akl-lawyer-service-server.vercel.app/all-services/${params.id}`)
                },
                {
                    path: '/reviews',
                    element: <Reviews></Reviews>
                },
                {
                    path: '/blog',
                    element: <Blog></Blog>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/signup',
                    element: <Signup></Signup>
                },
            ]
        }
    ]);