import React, { useState } from 'react'
import style from './Product.module.css'
import { IoMdClose } from "react-icons/io";

const Products = ({product}) => {
    let [statePupup , setStatePupp] = useState(null)
    const handleClickPop = (el)=>{
        setStatePupp(el)
    }
    const handleclcikDeleted = ()=>{
        setStatePupp(null)
    }
return (
    <>
    <div className={`${style.parent} mt-8 flex flex-wrap justify-between`}>
        {product.map((el)=>
        <div onClick={()=> handleClickPop(el)} className={`${style.box} w-[45%] bg-[#fff] mt-5 flex items-center rounded-[10px] overflow-hidden cursor-pointer`}>
            <div className="txts w-[50%] ps-5">
            <p>{el.title}</p>
            <h1>{el.price}</h1>
            </div>
        <img src={el.img} className='w-[50%] h-[200px]' alt="" />
        </div>
        )}
    </div>

    {statePupup && (
        <div className={`${style.pupp} fixed top-[17%] mx-auto left-[10%] right-[10%] flex w-[50%] mx-auto`}>
            <p className='flex justify-end pe-5 cursor-pointer text-[20px] font-bold' onClick={handleclcikDeleted}><IoMdClose /></p>
        <div className={`${style.boxs} w-[70%] sm:w-[100%] w-[100%] md:w-[80%] lg:w-[70%] bg-[#333131a3] mx-auto rounded-[10px] text-[#fff] text-center overflow-hidden`}>
            <img src={statePupup.img} alt="" className='w-[100%] h-[400px]'/>
            <p className='py-5'>{statePupup.title}</p>
        </div>
    </div>
    )}
    </>
)
}

export default Products
