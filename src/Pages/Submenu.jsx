import { NavLink } from "react-router-dom";

const Submenu = ({ categories }) => {

    // console.log(categories)
    return (
        
            <div role="tablist" className="flex flex-col gap-4 tabs-lifted bg-white p-8 md:m-2 rounded-xl">
                {
                    categories.map(category => (
                        <NavLink key={category.category} to={`/category/${category.category}`} 
                        role="tab" className={({isActive})=>`tab btn ${isActive? 'bg-purple-700 text-purple-300': ''}`}>{category.category}</NavLink>
                    ))
                }
            </div>
       
    );
};

export default Submenu;