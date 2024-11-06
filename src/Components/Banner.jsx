import { Link } from 'react-router-dom';
import image from './../assets/banner.jpg'
const Banner = () => {
    return (
        <div className="bg-purple-700 relative text-white p-8 rounded-b-2xl pb-32 lg:pb-52">
            <div className='flex justify-center flex-col items-center'>
                <h1 className="font-sora font-bold text-2xl md:text-4xl lg:text-6xl text-center mb-5">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className="font-sora font-thin text-center mb-5">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button className="font-bold font-sora text-xl btn text-purple-700"><Link to={'/dashboard'}>Shop Now</Link></button>
            </div>
            <div className='absolute left-20 lg:left-48 -bottom-20 md:top-2/3'>
                <div className='w-[250px] lg:w-[900px] h-[150px] lg:h-[463px] backdrop-blur-xl rounded-2xl overflow-hidden bg-white/30 z-50 p-2 md:p-5 border-2 border-white'>
                    <img className='w-full h-full object-cover brightness-100 rounded-2xl' src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;