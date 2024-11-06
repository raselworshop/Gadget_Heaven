import { useLoaderData } from "react-router-dom";
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const Statistics = () => {
    const data = useLoaderData();
    const {products} = data;
    console.log(products)
    // const {rating, price, product_title}= products;
    // console.log(rating)
    const chartData = products.map((product) => ({
        name: product.product_title,
        rating: product.rating,
        price: product.price,
    }));
    return (
        <div>
           <div className="bg-purple-700 text-white pt-5 lg:pb-12 ">
                <h1 className="font-sora font-bold text-3xl mb-5 text-center">Product Details</h1>
                <p className="text-center font-sora">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div>
                <ResponsiveContainer width={"100%"} height={400}>
                    <ComposedChart data={chartData}>
                        <CartesianGrid stroke="#f5f5f5"/>
                        <XAxis dataKey={"name"}></XAxis>
                        <YAxis dataKey={"price"}/>
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="price" barSize={30} fill="#8884d8"/>
                        <Line type="monotone" dataKey="rating" stroke="#ff7300"/>
                        <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8"/>

                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;