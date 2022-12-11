import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AboutPage from "../Pages/AboutPage";
import Blog from "../Pages/Blog";
import ContactPage from "../Pages/ContactPage";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <AboutPage></AboutPage>
            },
            {
                path: '/contact',
                element: <ContactPage></ContactPage>
            }
        ]
    }
]);