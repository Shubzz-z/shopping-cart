import React from 'react'
import CartItem from '../Components/CartItem'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function Cart() {
  const cart=useSelector((state)=>(state.cart))
  
  return (
      cart.length>0?(
        <div className='max-w-6xl flex mt-5 sm:gap-2 lg:gap-14 flex-col md:flex-row px-2 sm:px-14 md:px-4'>
          <div className='w-[100%] flex flex-col gap-4 sm:gap-10'>
              {  cart.map((item,index)=>(<CartItem key={item.id} item={item} index={index} length={cart.length}/>))}
          </div>
          <div className='md:w-[60%] md:text-left max-h-96 flex flex-col gap-1 md:gap-0 justify-between items-center md:items-start py-4 mt-10'>
            <div className='flex flex-col gap-1 md:gap-0'>
              <p className='text-xl uppercase font-bold text-green-800'>Your Cart</p>
              <h1 className='text-3xl md:text-5xl uppercase font-bold text-green-700'>Summary</h1>
              <div className='text-xl font-semibold' >
                <span className='text-slate-700'>Total Items : </span><span>{cart.length}</span>
              </div>
            </div>
            <div className='w-full'>
              <h2 className="text-xl font-bold">
                <span className="text-gray-700 font-semibold">Total Amount:</span>
                <span> {cart.reduce((acc,crr)=>acc+=crr.price,0).toFixed(2)}</span>
              </h2>
              <button type="button" className='w-full bg-green-700 text-white py-3 px-10 rounded-lg hover:bg-purple-50 border-2 border-green-700 hover:text-green-700 transition duration-300 ease-linear tracking-wider font-semibold mt-5'>Checkout Now</button>
            </div>
          </div>
        </div>
      ):(
      <div className='absolute inset-0 flex flex-col justify-center items-center'>
        <div className=''>
          <h2 className="text-gray-700 font-semibold text-xl mb-2">Your Cart is empty!</h2>
          <NavLink to="/"><button type="button" className='uppercase bg-green-600 text-white py-3 px-10 rounded-lg hover:bg-purple-50 border-2 border-green-600 hover:text-green-700 transition duration-300 ease-linear tracking-wider font-semibold mt-5'>Shop Now</button></NavLink>
        </div>
    </div>)
    
    
  )
}

export default Cart