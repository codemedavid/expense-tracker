// ExpenseHistory.jsx

import React, { useState } from 'react';

function ExpenseHistory() {
  const [history, setHistory] = useState([
    { id: '1', category: 'Utilities', date: '2023-03-01', value: '$100' },
    { id: '2', category: 'Groceries', date: '2023-03-02', value: '$200' },
    { id: '1', category: 'Utilities', date: '2023-03-01', value: '$100' },
    { id: '2', category: 'Groceries', date: '2023-03-02', value: '$200' },
    { id: '1', category: 'Utilities', date: '2023-03-01', value: '$100' },
    { id: '2', category: 'Groceries', date: '2023-03-02', value: '$200' },
    // Add more history items as needed
  ]);

  return (
    <div className="flex flex-col items-center justify-top p-4 text-black bg-white rounded shadow">
      <div className="w-full">
        {history.map((item) => (
          <div key={item.id} className="mb-4 p-4 bg-gray-100 rounded shadow flex justify-between">
            <div className="flex flex-col">
              <p className="text-sm text-gray-600 mb-3">Date: <span className="font-semibold">{item.date}</span></p>
              <p className="text-sm text-gray-600 mb-auto">Category: <span className="font-semibold">{item.category}</span></p>
              <p className="text-sm text-gray-600 mb-auto">Value: <span className="font-semibold">{item.value}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseHistory;
