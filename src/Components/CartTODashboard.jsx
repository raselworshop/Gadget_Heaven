
import { TiDeleteOutline } from 'react-icons/ti';

const CartTODashboard = ({ product, handleRemove }) => {
    console.log(handleRemove)
    const {product_id, description, product_title, product_image, price } = product;
    return (
        <div className="flex md:justify-between bg-white shadow-xl py-5 mx-4 my-4 rounded-2xl">
            <div className='flex items-center'>
                <figure className="p-2 md:px-10 w-52">
                    <img
                        src={product_image}
                        alt="Shoes"
                        className="rounded-xl h-full" />
                </figure>
                <div className="flex justify-between">
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
                </div>
            </div>
            <div onClick={()=> handleRemove(product_id)} className='md:pr-10 mr-5'>
                <button className='text-red-500 text-lg md:text-3xl font-thin'><TiDeleteOutline /> </button>
            </div>
        </div>
    );
};

export default CartTODashboard;