import React from 'react'
import CardStack from './CardStack'; // Import the CardStack component

import { Bar, Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


function Expense() {
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'Monthly Expenses',
      data: [500, 600, 800, 810, 560, 550],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        // More colors as needed
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        // More borders as needed
      ],
      borderWidth: 1,
    }],
  };
  
  return (



<div>
  
<div className="container p-4 mx-auto">
  {/* Grid setup */}
  <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
    
    {/* Column for Section 7 */}
    <div className="flex items-center justify-center p-4 text-black bg-white-500 rounded shadow lg:col-span-3">
      <h2>SECTION 7</h2>
    </div>

    {/* Column for Sections 1-4 */}
    <div className="w-full space-y-4 lg:col-span-6">
      {/* Section 1 */}
      
      <div className="p-4 text-white bg-white-500 rounded shadow h-60">
        
        <CardStack /> {/* Use the CardStack component here */}
      </div>
      
     {/* Section 2 as a button */}
<button 
  className="flex justify-center items-center h-24 p-4 text-white bg-blue-800 rounded shadow w-full" 
  onClick={() => {
    // Your click handler logic here
  }}
>
  <h1 className="text-xl font-semibold">+ Add Expense</h1>
</button>

        
     
      
      {/* Section 3 */}
      <div className="p-4 text-white bg-white-500 rounded shadow h-80">
      <Bar data={chartData} options={{ responsive: true }} />
        
      </div>
      
      {/* Section 4 */}
      <div className="flex items-center justify-center p-4 text-white bg-white-500 rounded shadow h-80">

      <div className="w-full h-full flex items-center justify-center">
    <Pie data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
  </div>
    </div>
    </div>
    {/* Column for Sections 5 & 6 */}
    
    <div className="flex flex-col space-y-4 lg:col-span-3">
      {/* Section 5 */}
      <div className="h-24 p-4 text-black bg-white-500 rounded shadow">
        <h2>SECTION 5</h2>
       
      </div>
      
      {/* Section 6 */}
      <div className="flex-grow p-4 text-black bg-white-500 rounded shadow">
        <h2>SECTION 6</h2>
      </div>
    </div>
    
  </div>
</div>


</div>






















  )
}

export default Expense
