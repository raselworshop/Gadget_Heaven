// import { createContext, useContext, useState } from "react";

// export const CartContext = createContext();
// export const CartProvider = ({children})=>{
//     const [cartCount, setCartCount] = useState(0);
//     // const addToCart = ()=>{
//     //     setCartCount(prevCount => prevCount + 1)
//     // }
//     return(
//         <CartContext.Provider value={{cartCount, setCartCount}}>
//             {children}
//         </CartContext.Provider>
//     )
// }
// export const useCart = () => {
//     return useContext(CartContext);
// };














// // import { createContext, useEffect, useState } from "react";

// // export const CartContext = createContext();

// // const CartProvider = ({children})=>{
// //     const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
// //     const [cart, setCart] = useState(initialCart);

// //     const addToCart = (product)=>{
// //         const updatedCart = [...cart, product];
// //         setCart(updatedCart);
// //         localStorage.setItem('cart', JSON.stringify(updatedCart)) 
// //     }

// //     const removeFromCart = (productId)=>{
// //         const updatedCart = cart.filter((item)=> item.product_id !== productId);
// //         setCart(updatedCart);
// //         localStorage.setItem('cart', JSON.stringify(updatedCart))
// //     }
// //     useEffect(()=>{
// //         localStorage.setItem('cart', JSON.stringify(cart))
// //     }, [cart]);

// //     return (
// //         <CartContext.Provider
// //             value={{cart, addToCart, removeFromCart}}
// //         >{children}</CartContext.Provider>
// //     )
// // }

// // export default CartProvider;