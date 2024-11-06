
const Footer = () => {
    return (
        <div className="font-sora bg-white p-10 mt-12">
            <div className="flex flex-col">
                <h1 className="text-2xl   text-center md:text-4xl font-bold">Gadget Heaven</h1>
                <p className="font-medium text-center ">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="border-b-2 border-dashed my-8"></div>
            <footer className="footer lg:ml-32 text-slate-600">

                <nav>
                    <h6 className="footer-title text-black">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-black">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-black">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;