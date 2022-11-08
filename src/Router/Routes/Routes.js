import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layouts/Main';
import Error from '../../Error/Error';
import Home from '../../Pages/Home/Home';
import Services from '../../Pages/Services/Services';
import Reviews from '../../Pages/Reviews/Reviews';
import Blog from '../../Pages/Blog/Blog';
import Login from '../../Login/Login';
import Signup from '../../Signup/Signup';

  export const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            errorElement: <Error></Error>,
            children:[
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/services',
                    element: <Services></Services>
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