import React from 'react'
import CardStack from './CardStack'; // Import the CardStack component
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Bar, Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import RecurringExpenses from './RecurringExpenses'; // Make sure the path is correct
import { Reorder } from 'framer-motion';

function Expense({auth}) {
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
    <AuthenticatedLayout user={auth.user}>


<div>

<div className="container p-4 mx-auto">
  {/* Grid setup */}
  <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">

    {/* Column for Section 7 */}
    <div className="flex items-top justify-top p-4 text-black bg-white-500 rounded shadow lg:col-span-3">
    <RecurringExpenses />
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

      <div className= "mb-4 w-full text-center p-5 bg-blue-800 text-white rounded">
<h2 className="font-semibold text-lg">History</h2>
</div>


      </div>

      {/* Section 6 */}
      <div className="flex-grow p-4 text-black bg-white-500 rounded shadow">



      <div className="flex flex-col items-center justify-top p-4 text-black bg-white rounded shadow lg:col-span-3">



</div>



      </div>
    </div>

  </div>
</div>


</div>




















</AuthenticatedLayout>

  )
}

export default Expense
