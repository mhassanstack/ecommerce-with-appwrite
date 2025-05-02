import reactIcon from '../assets/react.svg'
import cartIcon from '../assets/cart-shopping-light.svg'
import { Link, NavLink } from 'react-router';

function Header({ isSidebarOpen, setIsSidebarOpen }) {
    return (
        <div className='fixed top-0 left-0 right-0 flex items-center justify-between px-5 py-5 bg-white shadow-md'>
            <div>
                <img src={reactIcon} alt="" className='animate-spin' style={{ animationDuration: "2.5s" }} />
            </div>
            <div className='flex gap-4 text-xl'>
                <NavLink to='/' className={({ isActive }) => isActive ? "text-orange-600" : "text-black"}>Home</NavLink>
                <NavLink to='/add-product' className={({ isActive }) => isActive ? "text-orange-600" : "text-black"}>Add Products</NavLink>
                <NavLink to='/products' className={({ isActive }) => isActive ? "text-orange-600" : "text-black"}>Products</NavLink>
                {/* <NavLink to='/checkout' className={({ isActive }) => isActive ? "text-orange-600" : "text-black"}>Checkout</NavLink> */}
                <NavLink to='/add-users' className={({ isActive }) => isActive ? "text-orange-600" : "text-black"}>AddUsers</NavLink>
                <NavLink to='/user-list' className={({ isActive }) => isActive ? "text-orange-600" : "text-black"}>User List</NavLink>
                <NavLink to='/product-list' className={({ isActive }) => isActive ? "text-orange-600" : "text-black"}>Product List</NavLink>
                {/* <NavLink to='/signup' className={({ isActive }) => isActive ? "text-orange-600" : "text-black"}>Signup</NavLink>
                <NavLink to='/login' className={({ isActive }) => isActive ? "text-orange-600" : "text-black"}>Login</NavLink> */}
            </div>
            <div>
                <img src={cartIcon} alt="" className='w-[25px]' onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
            </div>
        </div>
    );
}

export default Header;