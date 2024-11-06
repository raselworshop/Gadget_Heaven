import { NavLink } from "react-router-dom";

const Product = ({ product }) => {
    const { product_id, product_title, product_image, price } = product;
    return (
        <div className="card bg-base-100 shadow-xl mx-2 mb-4">
            <figure className="px-6 pt-10">
                <img
                    src={product_image}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product_title}</h2>
                <p className="flex items-center gap-2 text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    {price}</p>
                <div className="card-actions">
                    <NavLink to={`/products/${product_id}`}
                        className="btn outline outline-purple-700 text-purple-500
                         hover:bg-purple-700 hover:text-purple-300 hover:outline-none
                        ">View Details</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Product;