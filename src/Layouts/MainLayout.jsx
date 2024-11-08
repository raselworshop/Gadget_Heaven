import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const MainLayout = () => {
    const location = useLocation();
    const [title, setTitle] = useState('Gadget_Heaven')
    useEffect(()=>{
        switch (location.pathname) {
            case '/':
                setTitle('Gadget_Heaven | Home');
                break;
            case '/statistics':
                setTitle('Gadget_Heaven | statistics');
                break;
            case '/dashboard':
                setTitle('Gadget_Heaven | Dashboard');
                break;
            case '/dashboard/cart':
                setTitle('Gadget_Heaven | Cart');
                break;
            case '/dashboard/wishlist':
                setTitle('Gadget_Heaven | WishList');
                break;
        
            default:
                if(location.pathname.startsWith('/category/')){
                    const category = location.pathname.split('/').pop();
                    setTitle(`Gadget_Heaven | ${category}`);
                }else if(location.pathname.startsWith('/products')){
                    setTitle('Gadget_Heaven | Products Details');
                }else{
                    setTitle('Gadget_Heaven');
                }
                break;
        }
    }, [location])
    return (
        <div className="bg-base-200 m-10 md:overflow-hidden mb-0">
            <ToastContainer></ToastContainer>
            <Helmet><title>{title}</title></Helmet>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="min-h-[calc(100vh-352px)] mx-auto container">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;