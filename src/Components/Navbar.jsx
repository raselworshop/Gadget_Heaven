import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    return (
        <div
            className={`px-12 text-xl rounded-t-2xl
         ${location.pathname === '/' ? 'bg-purple-700' : ''}`
            }
        >
            <div className="max-w-7xl mx-auto font-sora">
                <div className="navbar">
                    <div className="navbar-start -ml-5 md:ml-0 mr-5 md:mr-0">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <NavLink
                                    className={({ isActive }) =>
                                        `font-bold btn ${isActive ? 'text-warning btn-success' : 'hover:text-warning'}`
                                    }
                                    to='/'
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        `font-bold btn ${isActive ? 'text-warning btn-success' : 'hover:text-warning'}`
                                    }
                                    to='/statistics'
                                >
                                    Statistics
                                </NavLink><NavLink
                                    className={({ isActive }) =>
                                        `font-bold btn ${isActive ? 'text-warning btn-success' : 'hover:text-warning'}`
                                    }
                                    to='/dashboard'
                                >
                                    Dashboard
                                </NavLink>
                                {
                                    (location.pathname === '/dashboard' || location.pathname === '/statistics') && (
                                        <NavLink to={'/products'} className={({ isActive }) =>
                                            `font-bold btn ${isActive ? 'text-warning btn-success' : 'hover:text-warning'}`
                                        }>Product</NavLink>
                                    )
                                }
                            </ul>
                        </div>
                        {/* {/^\/(dashboard|statistics|products|)(\/cart|\/wishlist)?$/.test(location.pathname) && */}
                        <NavLink
                            // className="font-bold font-sora text-xl"
                            className={({ isActive }) =>
                                `font-bold font-sora text-lg md:text-xl ${isActive ? 'text-white hover:text-warning' : 'hover:text-warning'}`
                            }
                            to='/'
                        >
                            Gadget_Heaven
                        </NavLink>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-5">

                            <NavLink
                                className={({ isActive }) =>
                                    `font-bold btn ${isActive ? 'text-warning btn-success' : 'hover:text-warning'}`
                                }
                                to='/'
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    `font-bold btn ${isActive ? 'text-warning btn-success' : 'hover:text-warning'}`
                                }
                                to='/statistics'
                            >
                                Statistics
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    `font-bold btn ${isActive ? 'text-warning btn-success' : 'hover:text-warning'}`
                                }
                                to='/dashboard'
                            >
                                Dashboard
                            </NavLink>

                            {/* (location.pathname === '/dashboard'|| location.pathname === '/statistics') i need more excution  */}
                            {/^\/(dashboard|statistics)(\/cart|\/wishlist)?$/.test(location.pathname) && (
                                <NavLink to={'/products'} className={({ isActive }) =>
                                    `font-bold btn ${isActive ? 'text-warning btn-success' : 'hover:text-warning'}`
                                }>Product</NavLink>
                            )
                            }

                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator p-2 bg-white rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="badge badge-sm indicator-item">0</span>
                                </div>
                            </div>
                            <div
                                tabIndex={0}
                                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                                <div className="card-body">
                                    <span className="text-lg font-bold">0 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator p-2 bg-white rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>

                                    <span className="badge badge-sm indicator-item">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;