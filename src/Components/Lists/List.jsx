import React from 'react'
import list from './List.module.css'
const List = ({cate,allCat , searchItems}) => {
    const onFilter = (items)=>{
        cate(items);
    }
    const onSearch = (el)=>{
        searchItems(el);
    }
  return (
    <>
    <div className={`${list.items} flex flex-wrap pt-8 w-[100%] sm:flex-col flex-col md:flex-row lg:flex-row xl:flex-row justify-between items-center`}>
    <div className={` ${list.btns} w-[55%]`}>
        {allCat.map((el)=>
                <button onClick={()=>onFilter(el)} className=' border-1 py-1 px-3 cursor-pointer me-5 outline-0'>{el}</button>
        )}
    </div>
    <div className={`${list.search} m-0 mx-auto`}>
        <input onChange={(e)=>onSearch(e.target.value)} type="search" placeholder='Search Food' className='bg-[#fff] py-1 px-9 outline-0'/>
    </div>
    </div>
    </>
  )
}

export default List
