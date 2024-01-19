import React from 'react'

function BalanceCard() {
  return (
    <div className="py-12 max-w-full px-2">
    <div className="max-w-full mx-auto sm:px-6 lg:px-8">
       <div className="bg-[#8c7851] overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 text-[#fffffe] text-center text-xl"><span>Total Balance </span> <h4 className='text-[#fffffe] text-center text-5xl font-bold py-2'>₱200,000</h4></div>
          <div className='flex justify-center gap-20 px-5 pb-8'>
              <div className=''>
                  <h4 className='text-[#fffffe] text-center py-2'>INCOME</h4>
                  <h2 className='font-bold text-green-200 sm:text-xl lg:text-2xl'>+₱500,000</h2>
              </div>
              <div>
                  <h4 className='text-[#fffffe] px-3 text-center py-2'>EXPENSE</h4>
                  <h2 className='font-bold text-red-300 sm:text-xl lg:text-2xl'>-₱300,000</h2>
              </div>
          </div>
      </div>
    </div>
  </div>
  )
}

export default BalanceCard
