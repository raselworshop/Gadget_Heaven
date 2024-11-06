import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
    return (
        <div className="bg-base-200 m-10 md:overflow-hidden mb-0">
            <ToastContainer></ToastContainer>
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