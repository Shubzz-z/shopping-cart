import React from 'react'
import { useState, useEffect } from 'react';
import Spinner from '../Components/Spinner'
import Product from '../Components/Product'

function Home() {
  const [loading,setLoading]=useState(false);
  const [items,setItems]=useState([]);
  const Api_url = "https://fakestoreapi.com/products"

  async function FatchItems() {
    setLoading(true)
    try {
      let data=await fetch(Api_url);
      let output=await data.json();
      setItems(output);
    } catch (error) {
      console.log("Data Not Found")
    }
    setLoading(false);
  }
  useEffect(()=>{
    FatchItems();
  },[])

  return (
    <div className='max-w-6xl grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-12 p-4'>
      {loading?(<Spinner/>):(
        items.length>0?(
          items.map((item)=>(<Product key={item.id} item={item}/>))
        ):(<div>Data Not Found</div>)
      )}
    </div>
  )
}

export default Home