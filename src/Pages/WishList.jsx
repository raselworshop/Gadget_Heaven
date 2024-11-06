import { useEffect, useState } from "react";
import { getAllWishProduct, removeFromWishlist } from "../Utilities";
import WishlistToDasboard from "../Components/WishlistToDasboard";

const WishList = () => {
    const [wishProduct, setWishProduct] = useState([]);
    useEffect(()=>{
        const wishlist = getAllWishProduct();
        setWishProduct(wishlist)
    }, [])
    const handleRemoveWish = product_id =>{
        removeFromWishlist(product_id);
        const wishlist = getAllWishProduct();
        setWishProduct(wishlist)
    }
    return (
        <div>
            <div className="flex justify-between px-5 py-10">
                <h3 className='font-sora font-bold text-2xl'>Wish List</h3>
                
            </div>
            {
                wishProduct.map(product => <WishlistToDasboard key={product.product_id} handleRemoveWish={handleRemoveWish} product={product}></WishlistToDasboard>)
            }
        </div>
    );
};

export default WishList;