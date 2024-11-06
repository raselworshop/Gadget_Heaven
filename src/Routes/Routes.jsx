import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layouts/MainLayout'
import Home from '../Pages/Home'
import GedgetsSubmenus from '../Pages/GedgetsSubmenus'
import ProductDetails from '../Pages/ProductDetails'
import Statistics from '../Pages/Statistics'
import Dashboard from '../Pages/Dashboard'
import Cart from '../Pages/Cart'
import WishList from '../Pages/WishList'
import ErrorPage from '../Components/ErrorPage'


const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage> ,
    children:[
        {
            path:'/',
            element:<Home></Home>,
            children:[
                {
                    path:'/',
                    element: <GedgetsSubmenus></GedgetsSubmenus>,
                    loader: async ()=> {
                        const categories = await fetch('../category.json').then(res => res.json());
                        const products = await fetch('../products.json').then(res => res.json());
                        return {categories, products}
                    },
                },
                {
                    path:'category/:category',
                    element: <GedgetsSubmenus></GedgetsSubmenus>,
                    loader: async ()=> {
                        const categories = await fetch('../category.json').then(res => res.json());
                        const products = await fetch('../products.json').then(res => res.json());
                        return {categories, products}
                    },
                }
            ]
        },
        {
            path:'/products/:product_id',
            element:<ProductDetails></ProductDetails>,
            loader: async ()=> {
                const categories = await fetch('../category.json').then(res => res.json());
                const products = await fetch('../products.json').then(res => res.json());
                return {categories, products}
            },
        },
        {
            path:'/statistics',
            element: <Statistics></Statistics>,
            loader: async ()=> {
                const categories = await fetch('../category.json').then(res => res.json());
                const products = await fetch('../products.json').then(res => res.json());
                return {categories, products}
            },
        },
        {
            path: '/dashboard',
            element:<Dashboard></Dashboard>,
            children:[
                {
                    path:'cart',
                    element:<Cart></Cart>,
                },
                {
                    path:'wishlist',
                    element:<WishList></WishList>
                }
            ]
        },
        {
            path:'/products',
            element:<GedgetsSubmenus></GedgetsSubmenus>,
            loader: async ()=> {
                const categories = await fetch('../category.json').then(res => res.json());
                const products = await fetch('../products.json').then(res => res.json());
                return {categories, products}
            },
        }
    ]
  }
])

export {routes}