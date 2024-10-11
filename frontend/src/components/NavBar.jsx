import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { RiSearchLine, RiAccountCircleLine, RiShoppingCart2Line, 
  RiMenu5Fill, RiDropdownList } from "react-icons/ri";
import { ShopContext } from '../context/ShopContext';

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const {setShowSearch, getCartCount,navigate,token,setToken,setCartItems}=useContext(ShopContext)

  const Logout= ()=>{
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }

  return (
    <div className='flex items-center justify-between py-5 font-medium relative'>
      <Link to='/'><img src={assets.ecommerce} className="w-36" alt="Logo" /></Link>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <li>
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>Home</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
          </NavLink>
        </li>
        <li>
          <NavLink to="/collection" className="flex flex-col items-center gap-1">
            <p>COLLECTION</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
          </NavLink>
        </li>
      </ul>
      <div className='flex items-center gap-6'>
        <RiSearchLine className='cursor-pointer' onClick={()=>setShowSearch(true)}/>
        <div className='group relative'>
           <RiAccountCircleLine onClick={()=> token ? null : navigate('/login')} className='w-5 cursor-pointer' />
              {/* Dropdown Menu */}
          {token && <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My profile</p>
              <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
              <p onClick={Logout} className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div> }
        </div>
        <Link to="/cart" className='relative'>
          <RiShoppingCart2Line />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
        </Link>
        <RiMenu5Fill onClick={() => setVisible(true)} className='w-5 cursor-pointer sm:hidden' />
      </div>
      {/* Sidebar menu for small screens */}
      <div className={`fixed top-0 right-0 bottom-0 bg-white transition-all duration-300 ${visible ? 'w-3/4' : 'w-0'} overflow-hidden`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <RiDropdownList className='h-4 rotate-180' />
            <p>Back</p>
          </div>
          <ul className='flex flex-col gap-3 pl-6'>
            <li>
              <NavLink to="/" onClick={() => setVisible(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/collection" onClick={() => setVisible(false)}>COLLECTION</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setVisible(false)}>ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setVisible(false)}>CONTACT</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
