import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner";

const Home = () => {
    return (
        <div>
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