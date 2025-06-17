import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BottomNav from "./stickyNav";


  

const TransactionHistory: React.FC = () => {
  const [userAmount, setUserAmount] = useState<number>(0);

    useEffect(() => {
      const storedUser = localStorage.getItem("loggedInUser");
      if (storedUser) {
        const user = JSON.parse(storedUser);
        setUserAmount(user.amount || 0)

        console.log(userAmount)
       
      }
    }, []);
  


const allTransactions = [
  // { type: "Debit", amount: -320000, date: "2025-05-29 09:00:00" },
  { type: "Deposit", amount: 15000.0, date: "2025-05-18 16:00:00" },
  { type: "Deposit", amount: 11200.0, date: "2025-05-07 14:30:00" },
  { type: "Deposit", amount: 2000.0, date: "2025-04-03 10:00:00" },
  { type: "Deposit", amount: 30400.0, date: "2025-04-01 10:00:00" },

  { type: "Debit", amount: -3000.0, date: "2024-12-20 10:15:00" },
  { type: "Deposit", amount: 6400.0, date: "2024-11-11 09:00:00" },
  { type: "Deposit", amount: 8500.0, date: "2024-10-15 16:30:00" },
  { type: "Debit", amount: -7000.0, date: "2024-09-05 08:45:00" },
  { type: "Deposit", amount: 12000.0, date: "2024-08-23 12:00:00" },
  { type: "Debit", amount: -500.0, date: "2024-07-08 17:00:00" },
  { type: "Deposit", amount: 3000.0, date: "2024-06-10 14:20:00" },
  { type: "Deposit", amount: 2500.0, date: "2024-05-14 15:00:00" },
  { type: "Debit", amount: -1500.0, date: "2024-04-22 10:30:00" },
  { type: "Deposit", amount: 10000.0, date: "2024-03-18 11:00:00" },
  { type: "Debit", amount: -2000.0, date: "2024-02-05 13:40:00" },
  { type: "Deposit", amount: 5000.0, date: "2024-01-12 09:15:00" }
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
