import React from 'react'
import { format } from 'date-fns';
function IncomeHistory(props) {
    console.log(props)

    function formatReadableDate(dateString) {
        // Parse the date string and format it
        return format(new Date(dateString), 'MMMM d, yyyy');
    }

  return (
    <div className='border-[1.5px] border-solid border-[#00000098] w-full h-20 rounded-md p-2'>
        <div className='flex justify-between mb-2'>
        <p className='text-xl font-bold'>{props.title}</p>
        <span className='text-xs text-[#00000080]'>{formatReadableDate(props.time)}</span>
        </div>

        <span className='text-green-600 font-bold'>
            + P{props.income.toLocaleString()}
        </span>


    </div>
  )
}

export default IncomeHistory
