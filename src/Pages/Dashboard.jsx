import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className="bg-purple-700 text-white py-5">
                <div className="flex flex-col items-center">
                    <h1 className="font-sora font-bold text-3xl mb-5 text-center">Dashboard</h1>
                    <p className="font-sora text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <div className="flex justify-center items-center my-8">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <NavLink className={({ isActive }) => `px-4 
                font-bold ${isActive ? 'btn btn-sm' : 'border-2 pt-1 px-4 rounded-2xl btn-sm'}`
                        } to='cart'>
                            Cart</NavLink>
                        <NavLink className={({ isActive }) => `px-4 
                font-bold ${isActive ? 'btn btn-sm' : 'border-2 pt-1 px-4 rounded-2xl btn-sm'}`
                        } to='wishlist'>
                            WishList</NavLink>

                    </ul>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;