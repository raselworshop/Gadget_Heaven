import { toast } from "react-toastify";

// get all product from local storage 
const getAllCartProduct = () => {
    const cartedProduct = localStorage.getItem('cart')
    if (cartedProduct) {
        const product = JSON.parse(cartedProduct);
        // console.log(product)
        return product;
    } else {
        // console.log([])
        return [];
    }
}

//set/add product to local storage
const addCart = product => {
    // console.log(product)
    const carts = getAllCartProduct() || [];
    const isExist = carts.find((item) => item.product_id === product.product_id);
    // console.log(carts)

    if (isExist) {
        toast.error('Product already Exist!!')

    } else {
        carts.push(product);
        localStorage.setItem('cart', JSON.stringify(carts))
        toast.success('Product added to cart !!');

    }
}

//remove product from local storage
const removeCartedProduct = product_id => {
    // console.log(product_id)
    const carts = getAllCartProduct();
    const remainingProduct = carts.filter(product => product.product_id !== product_id);
    localStorage.setItem('cart', JSON.stringify(remainingProduct))
    toast.success('Product successfully removed from cart !!');
}
//remove product from local storage on purchasing
const removeCartedProductOnPurchase = product_id => {
    // console.log(product_id)
    const carts = getAllCartProduct();
    const remainingProduct = carts.filter(product => product.product_id !== product_id);
    localStorage.setItem('cart', JSON.stringify(remainingProduct))
}

// add wishlist
const getAllWishProduct = () => {
    const allWishProduct = localStorage.getItem('wishProduct');

    if (allWishProduct) {
        const productW = JSON.parse(allWishProduct)
        return productW;
    } else {
        console.log([])
        return [];
    }
}

// add/ set wish cart
const addWishList = product => {
    const wishedProduct = getAllWishProduct() || [];
    // console.log(product)
    const isExist = wishedProduct.find(item => item.product_id === product.product_id)
    if (isExist) {
        return toast.error('This product is already in wishlist!!')
    } else {
        wishedProduct.push(product);
        localStorage.setItem('wishProduct', JSON.stringify(wishedProduct))
        toast.success('The product is added in wishlist!!')
    }
}
//remove from wish list
const removeFromWishlist = product_id =>{
    const  wishedProduct = getAllWishProduct();
    const remainedWishProduct = wishedProduct.filter(item=> item.product_id !== product_id);
    localStorage.setItem('wishProduct', JSON.stringify(remainedWishProduct))
        toast.success('Product is successfully deleted from wishlist!!')
}


export { addCart, getAllCartProduct, addWishList, getAllWishProduct, removeCartedProduct, removeFromWishlist, removeCartedProductOnPurchase, }