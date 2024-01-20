import React from 'react'
import Chart from 'chart.js/auto';
import { Bar, Line, Pie } from 'react-chartjs-2';
function Graphs() {
  return (
    <div className='flex flex-col sm:flex-row sm:px-11 sm:gap-5 sm:py-4 '>

    <div className='w-full p-4 sm:w-7/12 bg-white rounded-md'>
    <Line
    data={{labels: ["Food", "Bills", "House"],
    datasets: [{
        label: "Biggest Expense",
        data: [23000, 20000, 13000],

    },
],
}}
/>
    </div>
<div className='w-full sm:w-5/12 bg-white rounded-md'>
    <div className='flex'>

<div className='w-[60%] mt-6'>

    <Pie
    data={{labels: ["Food", "Bills", "House"],
    datasets: [{
        label: "Biggest Expense",
        data: [23000, 20000, 13000],

    },
],
}}
/>
</div>
<div className='p-3  flex flex-col justify-center items-center'>
<p>Food: 23,000</p>
<p>Bills: 20,000</p>
<p>House: 13,000</p>


</div>
</div>
</div>
</div>
  )
}

export default Graphs
