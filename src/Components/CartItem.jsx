import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/Slices/CartSlice';
import { MdDelete } from "react-icons/md";
import { toast } from 'react-hot-toast';

function CartItem({item,index,length}) {
  const dispatch=useDispatch();
  function removeProduct(){
    dispatch(remove(item.id));
    toast.error("Item removed from cart!")
  }
  return (
    <div className={`flex gap-2 md:gap-4 text-left ${(index+1<length)?'border-b-2 border-slate-500':''} lg:px-6 py-4`}>
      <div className=' w-[50%] sm:w-[35f%]'><img src={item.image} alt="" className='h-full w-full object-contain'/></div>
      <div className='flex flex-col min-[350px]:justify-evenly justify-center sm:justify-between sm:gap-4 sm:p-4 rounded-xl w-full items-start'>
        <p className='mt-1 text-[5vw] text-gray-700 font-semibold sm:text-xl text-left'>{item.title}</p>
        <p className='text-gray-700 text-xs text-[3vw] sm:text-base'>{item.description.slice(0,80)}...</p>
        <div className='flex justify-between w-full pr-4 items-center'>
          <p className='text-green-600 font-bold'>${item.price}</p>
          <button type="button" onClick={removeProduct} className='rounded-full p-3 bg-red-200 hover:bg-red-400 group'><MdDelete className='text-red-800 group-hover:text-white' /></button>
        </div>
      </div>
    </div>
  )
}

export default CartItem