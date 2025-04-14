import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BottomNav from "./stickyNav";


  

const TransactionHistory: React.FC = () => {
  const [userAmount, setUserAmount] = useState<number>(0);

    useEffect(() => {
      const storedUser = localStorage.getItem("loggedInUser");
      if (storedUser) {
        const user = JSON.parse(storedUser);
        setUserAmount(user.amount || 0);
       
      }
    }, []);
  


const allTransactions = [
    { type: "Deposit", amount: 4250.0, date: "2025-02-07 14:30:00" },
    { type: "Deposit", amount: userAmount, date: "2025-02-07 09:00:00" },
   
    // { type: "Credit", amount: 75000.0, date: "2025-01-02 16:00:00" },
    // { type: "Debit", amount: -1500.0, date: "2025-01-02 10:20:00" },
    // { type: "Credit", amount: 200000.0, date: "2025-01-01 10:00:00" },
    // { type: "Debit", amount: -5000.0, date: "2025-01-01 12:30:00" },
    // { type: "Debit", amount: -200.0, date: "2024-12-31 18:45:00" },
    // { type: "Credit", amount: 100000.0, date: "2024-12-31 10:15:00" },
    // { type: "Credit", amount: 180000.0, date: "2024-12-15 08:30:00" },
    // { type: "Debit", amount: -3000.0, date: "2024-12-15 14:50:00" },
    // { type: "Debit", amount: -800.0, date: "2024-12-10 11:00:00" },
    // { type: "Credit", amount: 95000.0, date: "2024-12-10 09:45:00" },
    // { type: "Debit", amount: -600.0, date: "2024-12-05 17:20:00" },
    // { type: "Credit", amount: 300000.0, date: "2024-12-05 10:10:00" },
    // { type: "Debit", amount: -12000.0, date: "2024-11-30 15:40:00" },
    // { type: "Credit", amount: 400000.0, date: "2024-11-30 08:00:00" },
    // { type: "Debit", amount: -500.0, date: "2024-11-25 13:25:00" },
    // { type: "Credit", amount: 175000.0, date: "2024-11-25 07:45:00" },
    // { type: "Credit", amount: 250000.0, date: "2024-11-20 09:15:00" },
    // { type: "Debit", amount: -3200.0, date: "2024-11-20 19:50:00" },
    // { type: "Debit", amount: -900.0, date: "2024-11-15 18:30:00" },
    // { type: "Credit", amount: 60000.0, date: "2024-11-15 07:00:00" },
    // { type: "Debit", amount: -1000.0, date: "2024-11-10 20:10:00" },
    // { type: "Credit", amount: 80000.0, date: "2024-11-10 08:30:00" },
    // { type: "Debit", amount: -2500.0, date: "2024-11-05 13:45:00" },
    // { type: "Credit", amount: 120000.0, date: "2024-11-05 07:15:00" },
    // { type: "Debit", amount: -300.0, date: "2024-10-31 22:30:00" },
    // { type: "Credit", amount: 90000.0, date: "2024-10-31 10:00:00" },
    // { type: "Debit", amount: -4500.0, date: "2024-10-25 15:00:00" },
    // { type: "Credit", amount: 250000.0, date: "2024-10-25 08:15:00" },
    // { type: "Credit", amount: 100000.0, date: "2024-10-20 09:30:00" },
    // { type: "Debit", amount: -5500.0, date: "2024-10-20 12:50:00" },
    // { type: "Debit", amount: -600.0, date: "2024-10-15 14:00:00" },
    // { type: "Credit", amount: 70000.0, date: "2024-10-15 08:45:00" },
    // { type: "Debit", amount: -3500.0, date: "2024-10-10 13:20:00" },
    // { type: "Credit", amount: 220000.0, date: "2024-10-10 08:00:00" },
    // { type: "Debit", amount: -2500.0, date: "2024-10-05 19:30:00" },
    // { type: "Credit", amount: 140000.0, date: "2024-10-05 07:10:00" },
    // { type: "Credit", amount: 50000.0, date: "2024-10-01 09:40:00" },
    // { type: "Debit", amount: -700.0, date: "2024-10-01 20:30:00" },
  ];
  const inflow = allTransactions
    .filter((t) => t.type === "Credit")
    .reduce((sum, t) => sum + t.amount, 0);

  const outflow = allTransactions
    .filter((t) => t.type === "Debit")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <>
    <div className="p-6 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center">
       <Link to='/dashboard'> <button className="text-purple-500 text-lg">
          <span>&larr;</span> 
        </button>
       </Link>
        <h1 className="text-lg font-bold text-black">Transaction History</h1>
        <button className="text-purple-500 text-lg">
          <span>&#x21bb;</span>
        </button>
      </div>

      {/* Inflow/Outflow Summary */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-sm text-gray-500">Inflow</h2>
          <p className="text-xl font-bold text-green-500">+${inflow.toFixed(2)}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-sm text-gray-500">Outflow</h2>
          <p className="text-xl font-bold text-red-500">
            -${Math.abs(outflow).toFixed(2)}
          </p>
        </div>
      </div>

      {/* Transaction List */}
      <div className="mt-6 space-y-4">
        {allTransactions.map((transaction, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
          >
            <div>
              <p
                className={`font-bold ${
                  transaction.type === "Debit" ? "text-red-500" : "text-green-500"
                }`}
              >
                {transaction.type}
              </p>
              {/* <p className="text-sm text-gray-500">{transaction.date}</p> */}
            </div>
            <p
              className={`font-bold text-lg ${
                transaction.type === "Debit" ? "text-red-500" : "text-green-500"
              }`}
            >
              {transaction.amount > 0 ? "+" : ""}
              {transaction.amount.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
    <BottomNav/>
    </>
  );
};

export default TransactionHistory;
