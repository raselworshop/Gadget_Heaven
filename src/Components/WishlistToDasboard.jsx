import { TiDeleteOutline } from "react-icons/ti";
import { addCart } from "../Utilities";
// import { useLocation } from "react-router-dom";

const WishlistToDasboard = ({ product, handleRemoveWish }) => {
    const handleAddCart = (product) => {
        addCart(product);
        handleRemoveWish(product_id)
        // getAllCartProduct(product)
    };
    // const location = useLocation();
    // console.log(location.pathname) I don't need to use this bcz the component is separeted to product card
    const { product_id, description, product_title, product_image, price } = product;
    return (
        <div className="flex md:justify-between bg-white shadow-xl py-5 mx-4 my-4 rounded-2xl">
            <div className='flex items-center'>
                <figure className="p-2 md:px-10 w-52">
                    <img
                        src={product_image}
                        alt="Shoes"
                        className="rounded-xl h-full" />
                </figure>
                <div className="flex justify-between flex-col lg:items-center lg:flex-row">
                    <div>
                        <h2 className="text-base md:card-title">{product_title}</h2>
                        <p className='text-xs md:text-lg'>{description}</p>
                        <p className="flex items-center gap-2 text-sm md:text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            {price}
                        </p>
                    </div>
                    <div tabIndex={0} role="button" className="btn btn-sm hover:bg-purple-700 hover:text-white">
                        <div onClick={() => handleAddCart(product)} className="rounded-2xl flex items-center gap-1">
                            <span className="font-sora font-bold text-xs">Add To Card</span>
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
                        </div>
                    </div>
                </div>

            </div>
            <div onClick={() => handleRemoveWish(product_id)} className='md:pr-10 mr-5'>
                <button className='text-red-500 text-lg md:text-3xl font-thin'><TiDeleteOutline></TiDeleteOutline>  </button>
            </div>
        </div>
    );
};

export default WishlistToDasboard;