import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/Slices/CartSlice';
import toast from 'react-hot-toast';

function Product({ item }) {
    
  const cart = useSelector((state) => state.cart); // Corrected accessing cart state
  const dispatch = useDispatch();

  const addtocart = () => {
    dispatch(add(item));
    toast.success("Item added to cart!")
  };
  
  const removefromcart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart!")
  };

  return (
    <div className='flex flex-col justify-between items-center gap-3 p-4 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] hover:scale-110 transition-all duration-300 ease-in'>
      <p className='truncate w-40 mt-1 text-gray-700 font-semibold text-lg text-center'>{item.title}</p>
      <p className='w-40 text-xs text-gray-400 text-left'>{item.description.slice(0,80)}...</p>
      <div className=' h-[180px]'><img src={item.image} alt="" className='h-full w-full object-contain'/></div>
      <div className='flex justify-between w-full mt-4'>
        <p className='text-green-600 font-semibold'>${item.price}</p>
        {
          cart.some((i) => item.id === i.id) ? (
            <button type='button' onClick={removefromcart} className=' text-gray-700 font-semibold border-2 border-gray-700 px-4 py-1 text-xs rounded-2xl hover:bg-gray-700 hover:text-white transition duration-300 ease-in uppercase'>Remove Itom</button>
          ) : (
            <button type='button' onClick={addtocart} className=' text-gray-700 font-semibold border-2 border-gray-700 px-4 py-1 text-xs rounded-2xl hover:bg-gray-700 hover:text-white transition duration-300 ease-in uppercase'>Add to Cart</button>
          )
        }
      </div>
    </div>
  );
}

export default Product;