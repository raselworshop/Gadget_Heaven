import { Helmet } from "react-helmet-async";
import Product from "../Components/Product";
// import { useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";

const Products = ({ products }) => {
    // console.log(products)
    // const location = useLocation();
    // const [title, setTitle] = useState('Home');
    // useEffect(()=>{
    //     if(location.pathname === '/'){
    //         setTitle('Home')
    //     }else{
    //         setTitle('Product')
    //     }
    //     // const currentTitle = location.pathname.split('/').pop();
    //     // setTitle(currentTitle ? currentTitle: 'Home')
    // }, [location])
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full m-2">
            {/* <Helmet><title>Gadget_Heaven | {title}</title></Helmet> */}

            {
                products.map(product => <Product key={product.product_id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;