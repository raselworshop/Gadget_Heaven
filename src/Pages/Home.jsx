import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner";
// import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            {/* <Helmet><title>Gadget_Heaven | Home</title></Helmet> */}
           
                <div className="md:mb-72">
                    <Banner></Banner>
                </div>
                <div className="my-12">
                    <Outlet></Outlet>
                </div>
            
        </div>

    );
};

export default Home;