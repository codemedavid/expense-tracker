import React, { useState } from 'react';
import CategoryItems from './CategoryItems';

function Category() {
  const [itemNum, setItemNum] = useState(0);

  const addItem = () => {
    setItemNum(itemNum + 1);
    console.log(itemNum);
  };

  return (
    <div className='max-w-full mx-auto sm:w-[95%] bg-[#eaddcf] h-22 px-2 py-2 sm:rounded-3xl'>
        <span className='font-bold px-3'>Categories</span>
      <div className='flex gap-2 overflow-x-auto overflow-y-hidden scroll-smooth py-3 px-2 scrollbar scrollbar-thumb-[#f25042] scrollbar-track-[#e9d4ba] scrollbar-thin scrollbar-thin '>
        <div  onClick={addItem}>


        <div className='w-[75px] bg-white h-[75px] rounded-full flex justify-center items-center cursor-pointer'>
          <span className='text-[#020826] text-8xl text-center mt-[-5px] ml-[-3px]'>
            +
          </span>
        </div>
        </div>
        <div className='flex gap-2 '>
          {Array.from({ length: itemNum }).map((_, index) => (
            <CategoryItems key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
