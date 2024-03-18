import React from 'react'
import {NavLink} from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from 'react-redux';

function Navbar() {
  const cart=useSelector(state=>state.cart)
  return (
    <div className='flex flex-grow justify-between h-20 max-w-6xl z-10'>
      <NavLink to="/"><div className='h-full'><img src='logo.png' alt="Logo" className='h-full p-3'/></div></NavLink>
      <div className='flex justify-center items-center text-white gap-4 mr-5'>
        <NavLink to="/" className="hover:text-green-400 transition duration-300 ease-in">Home</NavLink>
        <NavLink to="/cart" className="transition duration-300 ease-in relative"><FaCartPlus size={25} className='hover:text-green-400'/>
        {cart.length>0&&<div className='absolute bg-green-600 text-xs rounded-full w-5 h-5 flex justify-center items-center -top-1 -right-2 animate-bounce text-white'>{cart.length}</div>}
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar