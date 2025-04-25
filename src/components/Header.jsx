import reactIcon from '../assets/react.svg'
import cartIcon from '../assets/cart-shopping-light.svg'
import { Link, NavLink } from 'react-router';

function Header() {
    return (
        <div className='flex justify-between items-center py-5 px-5 '>
            <div>
                <img src={reactIcon} alt="" className='animate-spin' style={{ animationDuration: "2.5s" }} />
            </div>
            <div className='flex gap-4 text-xl'>
                <NavLink to='/' className={({ isActive }) => isActive ? "text-orange-600" : "text-black"}>Home</NavLink>
                <NavLink to='/products' className={({ isActive }) => isActive ? "text-orange-600" : "text-black"}>Products</NavLink>
                <NavLink to='/contact-us' className={({ isActive }) => isActive ? "text-orange-600" : "text-black"}>Contact Us</NavLink>
            </div>
            <div>
                <img src={cartIcon} alt="" className='w-[25px]' />
            </div>
        </div>
    );
}

export default Header;