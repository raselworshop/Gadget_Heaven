// import { Helmet } from "react-helmet-async";
import Product from "../Components/Product";
// import { useLocation, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

const Products = ({ products }) => {
    // let title = "Gadget_Heaven | Products"
    // const location = useLocation();
    // // console.log(products)
    // // const [title, setTitle] = useState('Home');
    // // useEffect(()=>{
    // //     if(location.pathname === '/'){
    // //         setTitle('Home')
    // //     }else{
    // //         setTitle('Product')
    // //     }
    // //     // const currentTitle = location.pathname.split('/').pop();
    // //     // setTitle(currentTitle ? currentTitle: 'Home')
    // const { product_id } = useParams();
    // }, [location])
    // if (location.pathname.startsWith('/products/') && product_id) {
    //     title = "Gadget_Heaven | Products";

    // }
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full m-2">
            {/* <Helmet><title>{title}</title></Helmet> */}

            {
                products.map(product => <Product key={product.product_id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;