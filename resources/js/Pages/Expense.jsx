import React, {useState} from 'react'
import CardStack from './CardStack'; // Import the CardStack component
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Bar, Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import RecurringExpenses from './RecurringExpenses'; // Make sure the path is correct
import { Reorder } from 'framer-motion';
import DropdownMenu from './DropdownMenu';

import { Download, Filter } from 'lucide-react';// the drop down icons where the download icon is direct imported so it cant have function
import { Search } from 'lucide-react';

import ExpenseHistory from './ExpenseHistory';

function Expense({auth}) {




    const items = [
        { name: "Item 1" },
        { name: "Item 2" },
        { name: "Item 3"},
        { name: "Item 4" },
        { name: "Item 5" },
        { name: "Item 6"},
      ];

      const [setCategoryFilter, categoryFilter] = useState("")


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

<div className="p-4 ">
  {/* Grid setup */}
  <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">

    {/* Column for Section 7 RecurringExpenses*/}
    <div className="flex items-top justify-center p-4 text-black bg-white-500 rounded shadow lg:col-span-3">
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




      {/* Section 3 bar */}
      <div className="p-4 text-white bg-white-500 rounded shadow h-80">
      <Bar data={chartData} options={{ responsive: true }} />

      </div>

      {/* Section 4 pie */}
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

<p>Jamal</p>


      </div>

      {/* Section 6 */}
      <div className="flex-grow p-4 text-black bg-white-500 rounded shadow">
        <div className="flex mb-4 w-full text-center p-5 bg-blue-800 text-white rounded">
          <div className='w-[22%] pt-2'>
          <Download className="mr-2" size={24} /> {/* Download icon used directly */}
          </div>

           {/* Container for the search bar and icon */}
           <div className="flex-grow">
           <div className="relative w-full max-w-5xl"> {/* Adjusted max-width to max-w-5xl */}
          <button
          onClick={() => {/* Define your search logic here */}}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black"
        >
          <Search size={20} />
        </button>
            <input
              type="text"
              placeholder="Search History..."
              className="pl-8 pr-3 py-2 w-full rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
          <div className='w-[20%] pt-2 pl-3'>
          <DropdownMenu iconType="filter">

          <div className="w-48 mx-auto my-4">
          {items.map((item, index) => (
            // Keeping the item style consistent with your previous setup
            <div key={index} className="w-full p-3 mb-4 bg-gray-100 text-black rounded shadow hover:bg-gray-200 text-center">
              {item.name}
            </div>
          ))}
        </div>

              </DropdownMenu>

          </div>
        </div>
{/* ExpenseHistory Component */}
<ExpenseHistory />

      </div>


      </div>



  </div>
</div>


</div>




















</AuthenticatedLayout>

  )
}

export default Expense
