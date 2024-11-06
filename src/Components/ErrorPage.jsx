import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center gap-5 m-auto mt-12 md:mt-24">
            <div className="flex flex-col justify-between items-center">
                <h1 className='text-7xl text-center mb-8'>You are in a wrong page</h1>
                <p className="mb-8 text-xl">Please click to back button to return home</p>
                <NavLink className={'btn btn-outline'} to={'/'}>Go Back</NavLink>
            </div>
            
        </div>
    );
};

export default ErrorPage;