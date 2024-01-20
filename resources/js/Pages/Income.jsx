import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { QuoteIcon } from 'lucide-react';
function Income({auth}) {
  return (
    <AuthenticatedLayout
    user={auth.user}
>
<div className='flex'>
<div className='w-[65%] p-4'>
    <div className="bg-white h-24 w-full rounded-md flex">
        <div className='w-[5%] p-2'>
            <QuoteIcon size={30} fill='black'/>
        </div>
        <div className='p-5'>
            <p>It's not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for.</p>
        </div>
    </div>

    <div className='mt-10 mx-10'>
        <p className='text-2xl font-bold'>Potential Income This Month</p>
        <span className='text-8xl font-bold '>P12,800</span>
        <p className='px-1 text-xl mt-4'>Income Today: <span className='font-bold'>P1,500</span></p>
    </div>

<div className='mx-3 mt-10 mb-5 flex justify-end'>
    <span className='bg-blue-800 p-2 rounded-md text-white cursor-pointer'>+ Add Source Of Income</span>
</div>
    <div className='bg-blue-800 w-full flex flex-wrap p-3 mt-2 mx-2 gap-2 rounded-lg'>
        <div className='w-44 h-24 bg-white rounded-md'>
            <p className='text-2xl pt-2 px-2 font-bold'>Job</p>
            <p className='p-2'>P15,000/Monthly</p>
        </div>

        <div className='w-44 h-24 bg-white rounded-md'>
            <p className='text-2xl pt-2 px-2 font-bold'>Part Time</p>
            <p className='p-2'>Depends</p>
        </div>

        <div className='w-44 h-24 bg-white rounded-md'>
            <p className='text-2xl pt-2 px-2 font-bold'>Business</p>
            <p className='p-2'>P2,000 Today</p>
        </div>

        <div className='w-44 h-24 bg-white rounded-md'>
            <p className='text-2xl pt-2 px-2 font-bold'>Part Time</p>
            <p className='p-2'>Depends</p>
        </div>

        <div className='w-44 h-24 bg-white rounded-md'>
            <p className='text-2xl pt-2 px-2 font-bold'>Part Time</p>
            <p className='p-2'>Depends</p>
        </div>

    </div>
</div>
</div>
    </AuthenticatedLayout>
  )
}

export default Income
