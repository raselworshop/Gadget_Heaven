import Product from "../Components/Product";

const Products = ({products}) => {
    // console.log(products)
    return (
        <div  className="grid md:grid-cols-2 lg:grid-cols-3 w-full m-2">
            {
                products.map(product=> <Product key={product.product_id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;