import { useLoaderData, useParams } from "react-router-dom";
import { addCart, addWishList,  } from "../Utilities";

const ProductDetails = () => {
    const { product_id } = useParams();
    const { products } = useLoaderData();
    // console.log(product_id)
    // console.log(products)
    const product = products.find(p => p.product_id === parseInt(product_id));
    // console.log(product)
    const { product_title, availability, product_image, price, description, Specification, rating } = product;
    const handleAddCart= (product)=>{
        addCart(product)
        // getAllCartProduct(product)
    };
    const handleWishList = (product)=>{
        addWishList(product)
        // getAllWishProduct(product)
    }
    return (
        <div className="relative min-h-[90vh] flex flex-col">
            <div className="bg-purple-700 text-white pt-5 lg:pb-60 ">
                <h1 className="font-sora font-bold text-3xl mb-5 text-center">Product Details</h1>
                <p className="text-center font-sora">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="absolute top-36 left-32 z-10 lg:min-w-[1000px] ">
                <div className="hero w-full bg-white place-items-center  rounded-xl">
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                            src={product_image}
                            className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">{product_title}</h1>
                            <p className="py-3 flex items-center gap-1 font-semibold text-xl">
                                Price:
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                {price}
                            </p>
                            <p className={`font-semibold rounded-full border-2 mb-3 w-fit ${availability ?
                                'bg-green-100 text-green-500 border-green-500 px-4 py-1' :
                                'bg-red-100 text-red-500 border-red-500 px-4 py-1'}`}>
                                {availability ? 'In Stock' : 'Out Of Stock'}</p>
                            <p>{description}</p>
                            <div className="my-2">
                                <h3 className="font-bold font-sora text-lg">Specification</h3>
                                <ul className="list-decimal list-inside">
                                    {
                                        Specification.map((speci, idx) => <li
                                            key={idx} className="font-semibold">{speci}</li>)
                                    }
                                </ul>
                            </div>
                            <div className="flex flex-col">
                                <div className="text-lg font-bold font-sora mb-2">
                                    Rating
                                    <div className="rating rating-sm">
                                        <input
                                            type="radio"
                                            name="rating-9"
                                            className="mask mask-star-2 bg-orange-400"
                                        />
                                    </div>
                                </div>
                                <div className="rating rating-md">
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-7"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <p className="ml-2">{rating}</p>
                                </div>
                            </div>
                            <div className="dropdown flex items-center gap-2 mt-2">
                                <div tabIndex={0} role="button" className="btn btn-sm  hover:bg-purple-700 hover:text-white">
                                    <div onClick={()=>handleAddCart(product)} className="px-2 rounded-2xl flex items-center gap-1">
                                        <span className="font-sora font-bold text-lg">Add To Card</span>
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
                                {/* love react/wish list */}
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle  hover:bg-purple-700 hover:text-purple-700">
                                    <div onClick={()=>handleWishList(product)} className="indicator p-2 bg-white rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;