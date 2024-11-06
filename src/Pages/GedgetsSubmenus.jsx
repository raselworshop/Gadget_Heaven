import { NavLink, useLoaderData, useLocation, useParams } from "react-router-dom";
import Submenu from "./Submenu";
import Products from "./Products";

const GedgetsSubmenus = () => {
    const { categories, products } = useLoaderData();
    const { category } = useParams();
    const location = useLocation();
    // console.log(category)
    const filteredProducts = category === 'All Products' || !category
        ? products : products.filter((product) => product.category === category);
    // console.log(categories, products)
    return (
        <div>
            <div
                className={`px-8 pt-12 flex justify-center items-center ${location.pathname === '/products' ? 'bg-purple-700 py-12 text-white' : ''
                    }`}>

                <NavLink
                    className="font-sora font-bold text-4xl text-center ">Explore Cutting-Edge Gadgets
                </NavLink>

            </div>
            <div className="grid md:grid-cols-4 mt-8">
                <div className="col-span-1">
                    <Submenu categories={categories}></Submenu>
                </div>
                <div className="col-span-3">
                    {filteredProducts.length === 0 ? (
                        <div className="flex justify-center items-center text-gray-500 font-sora font-semibold">
                            <h2>No Data Found</h2>
                        </div>
                    ) :
                        <Products products={filteredProducts}></Products>
                    }
                </div>
            </div>
        </div>
    );
};

export default GedgetsSubmenus;