import React, { useState } from 'react'
import List from './../Components/Lists/List';
import Products from './../Components/Products/Products';
import page from './Page.module.css'
import Data from './../Data/Data';
const Page = () => {
    const [data , setData]= useState(Data);
    const allCat = ['All',...new Set(Data.map((el)=> el.cate))];
    const originalData  = Data;
    console.log(allCat)
    //console.log(data);
    const categ = (catego)=>{
        if(catego === "All")
        {
            setData(originalData);
        }
        else
        {
            let newData = originalData.filter((el)=> el.cate === catego);
            setData(newData);
        }
    }
    const searchItems = (items)=>{
        if(items === "")
        {
            setData(originalData)
        }
        else
        {
            const newItems = originalData.filter((el) =>
                el.title.toLowerCase().startsWith(items.toLowerCase())
            );    
            setData(newItems)
        }
    }
return (
    <>
<div className={`${page.containerPage} container mx-auto mt-15 bg-[#ccc] p-8 rounded-[10px]`}>
    <h1 className='text-center text-[28px] font-bold'>FAST FOOD</h1>
    <List cate={categ} allCat={allCat} searchItems={searchItems}/>
    <Products product={data}/>
  </div>
    </>
)
}

export default Page
