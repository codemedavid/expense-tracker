import React, { useState } from 'react';
import CategoryItems from './CategoryItems';

function Category() {

  return (
    <div className='w-full mx-auto bg-white h-22  py-2 sm:rounded-md'>
        <div className='border-b-2 px-2 border-[#fafafa] mb-3'>
            <p className='text-xl'>Goals</p>
        </div>
        <div className='w-full px-2 pb-4 flex gap-2 overflow-x-auto'>
            <div className='flex'>

            <div className='w-14 h-14 rounded-full flex items-center justify-center bg-orange-200'>
                <span className='text-4xl w-14 h-14 flex justify-center items-center'>+</span>
            </div>
            <div className='w-20 py-2 px-2'>
                <p className='text-xs font-bold'>Add New Goal</p>
            </div>
            </div>

            <div className='w-14 h-14 rounded-full flex items-center justify-center bg-orange-200'>
                <span className='text-4xl w-14 h-14 flex justify-center items-center'>+</span>
            </div>
            <div className='w-14 h-14 rounded-full flex items-center justify-center bg-orange-200'>
                <span className='text-4xl w-14 h-14 flex justify-center items-center'>+</span>
            </div>
            <div className='w-14 h-14 rounded-full flex items-center justify-center bg-orange-200'>
                <span className='text-4xl w-14 h-14 flex justify-center items-center'>+</span>
            </div>



        </div>
    </div>
  );
}

export default Category;
