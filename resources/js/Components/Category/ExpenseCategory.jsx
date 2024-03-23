import React from 'react'

function ExpenseCategory() {
  return (
    <div>
        <div className='bg-white w-full h-full p-2'>
            <div>
                <p className='text-lg'>
                    Categories
                </p>

            <hr />
            </div>
            <div className='pt-4'>
            <div className="w-full px-2 pb-4 flex gap-2 h-full overflow-x-auto">
                <div className="flex" onClick={() => setShowModal(true)}>
                    <div className="w-14 h-14 rounded-full flex items-center justify-center cursor-pointer bg-orange-200">
                        <span className="text-4xl">+</span>
                    </div>
                    <div className="w-20 py-2 px-2">
                        <p className="text-xs font-bold">Category</p>
                    </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default ExpenseCategory
