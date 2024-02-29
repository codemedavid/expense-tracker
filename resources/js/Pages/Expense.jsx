import React from 'react'
import CardStack from './CardStack'; // Import the CardStack component
function Expense() {
  return (



<div>
  
<div className="container p-4 mx-auto">
  {/* Grid setup */}
  <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
    
    {/* Column for Section 7 */}
    <div className="flex items-center justify-center p-4 text-white bg-blue-800 rounded shadow lg:col-span-3">
      <h2>SECTION 7</h2>
    </div>

    {/* Column for Sections 1-4 */}
    <div className="w-full space-y-4 lg:col-span-6">
      {/* Section 1 */}
      
      <div className="p-4 text-white bg-blue-500 rounded shadow h-60">
        
        <CardStack /> {/* Use the CardStack component here */}
      </div>
      
      {/* Section 2 */}
      <div className="h-24 p-4 text-white bg-blue-500 rounded shadow">
        <h2>SECTION 2</h2>
      </div>
      
      {/* Section 3 */}
      <div className="p-4 text-white bg-blue-500 rounded shadow h-80">
        <h2>SECTION 3</h2>
      </div>
      
      {/* Section 4 */}
      <div className="p-4 text-white bg-blue-500 rounded shadow h-80">
        <h2>SECTION 4</h2>
      </div>
    </div>

    {/* Column for Sections 5 & 6 */}
    <div className="flex flex-col space-y-4 lg:col-span-3">
      {/* Section 5 */}
      <div className="h-24 p-4 text-white bg-blue-700 rounded shadow">
        <h2>SECTION 5</h2>
      </div>
      
      {/* Section 6 */}
      <div className="flex-grow p-4 text-white bg-blue-700 rounded shadow">
        <h2>SECTION 6</h2>
      </div>
    </div>
    
  </div>
</div>


</div>






















  )
}

export default Expense
