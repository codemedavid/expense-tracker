import React, { useState } from 'react';
import { Reorder } from 'framer-motion';

function RecurringExpenses() {
  const [expenses, setExpenses] = useState([
    { id: 'utility', name: 'Utility', amount: 100 },
    { id: 'foods', name: 'Foods', amount: 200 },
    { id: 'house_rent', name: 'House Rent', amount: 800 },
    { id: 'car', name: 'Car', amount: 300 },
    { id: 'family', name: 'family', amount: 1000 },
    { id: 'occasions', name: 'occasions', amount: 500 },
    { id: 'bitches', name: '', amount: 10000 },
    { id: 'charity', name: 'charity', amount: 300 },
    // Add more expenses as needed
  ]);

  return (
    <div className="flex flex-col items-center justify-top p-4 text-black bg-white rounded shadow lg:col-span-3">
      <div className="mb-4 w-full text-center p-2 bg-blue-800 text-white rounded">
        <h2 className="font-semibold text-lg">Recurring Expense</h2>
      </div>
      {/* Buttons container */}
      <div className="flex justify-center mb-2 mt-[-7px] space-x-4"> {/* Added space-x-4 for spacing between buttons */}
        <button className="w-20 px-12 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 flex items-center justify-center">Save</button> {/* Adjusted width */}
        <button className="w-20 px-12 py-2 bg-gray-500 text-white rounded shadow hover:bg-gray-600 flex items-center justify-center">Default</button> {/* Adjusted width */}
      </div>
      {/* Expense items */}
      <Reorder.Group axis="y" values={expenses} onReorder={setExpenses} className="w-full">
        {expenses.map((expense) => (
          <Reorder.Item key={expense.id} value={expense} className="mb-4 p-4 bg-gray-100 rounded shadow">
            <p className="text-sm text-gray-600">Expense Name: <span className="font-semibold">{expense.name}</span></p>
            <p className="text-sm text-gray-600">Amount: <span className="font-semibold">${expense.amount}</span></p>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
}

export default RecurringExpenses;
