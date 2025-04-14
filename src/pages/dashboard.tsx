import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSyncAlt, FaEye, FaEyeSlash, FaBell } from "react-icons/fa";
import BottomNav from "./stickyNav";
import img from '../assets/person_1.jpg'
import StatComponent from "../components/stats";

const Dashboard = () => {
  const navigate = useNavigate();

  const [visibleTransactions, setVisibleTransactions] = useState(4);
  const [userAmount, setUserAmount] = useState<number>(0);
  // const [acctNum, setAccountNum] = useState<number>(0);
  const [Limit, setLimit] = useState<number>(0);
  const [userImage, setUserImage] = useState<string>("");
  const [showBalance, setShowBalance] = useState<boolean>(true);
  const [userName, setUserName] = useState<string>("");
  const [accountType, setAccountType] = useState<string>("");
  const [subType, setSubType] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");

  // Fetch logged-in user data from local storage
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserAmount(user.amount || 0);
      setUserImage(user.profilePicture || "default-avatar.jpg");
      setUserName(user.firstName || "User");
      setAccountType(user.accountType || 'Nll');
      setSubType(user.accountSubType || "");
      setUserEmail(user.email || "");
      // setAccountNum(user.accountNumber || 0);
      setLimit(user.limit || 500000)
    }
  }, []);

  const allTransactions = [
    { type: "Deposit", amount: 4250.0, date: "2025-02-07 14:30:00" },
    { type: "Deposit", amount: 6250., date: "2025-02-07 09:00:00" },
    // { type: "Credit", amount: 75000.0, date: "2025-01-02 16:00:00" },
    // { type: "Debit", amount: -1200.0, date: "2025-02-07 14:30:00" },
    // { type: "Credit", amount: 2000.0, date: "2025-01-01 10:00:00" },
  ];

  const loadMoreTransactions = () => {
    setVisibleTransactions((prev) => Math.min(prev + 4, allTransactions.length));
  };

  const maskBalance = (amount: number) => {
    return amount.toLocaleString().replace(/\d/g, "*");
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const toggleBalanceVisibility = () => {
    setShowBalance((prev) => !prev);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Header */}
        <div className="flex justify-between px-4">
          <div className="bg-transparent text-[#000] p-4 flex gap-3 items-center z-10">
            <img
              src={userImage || img}
              alt="Profile"
              className="h-16 w-16 border-4 border-purple-600 rounded-full"
            />
            <div>
              <h1 className="text-sm font-semibold">Hello <span className="uppercase">{userName.split(" ")[0]}!!</span>,</h1>
              <span className="text-lg font-semibold">Welcome Back</span>
              <p className="text-[10px]">{userEmail}</p>

            </div>
          </div>

          <div className="cursor-pointer flex gap-3 text-2xl text-gray-500 pt-8">
            <div className="hover:text-black" onClick={refreshPage}>
              <FaSyncAlt />
            </div>
            <div className="hover:text-black">
              <FaBell />
            </div>
          </div>
        </div>

        <hr />

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row lg:space-x-6 lg:px-6 mt-5">
          {/* Left Section */}
          <div className="lg:w-1/3 space-y-6">
            {/* Total Balance Section */}
            <div className="p-2 bg-[#000] mx-4 rounded-[30px] shadow-lg">
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-[#ccc] font-medium">Total Balance</h2>
                  <button onClick={toggleBalanceVisibility} className="p-1">
                    {showBalance ? (
                      <FaEyeSlash className="text-[#fff] text-xl" />
                    ) : (
                      <FaEye className="text-[#fff] text-xl" />
                    )}
                  </button>
                </div>

                <h1 className="text-3xl font-bold mt-1 text-[#ccc]">
                  {showBalance ? `$${userAmount.toLocaleString()}.00` : `$${maskBalance(userAmount)}.**`}
                </h1>
              </div>

              {/* Actions Section */}
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 p-2">
                <button
                  className="flex items-center text-purple-600 p-2 bg-purple-50 rounded-lg shadow"
                  onClick={() => navigate("/send")}
                >
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <span className="material-icons">send</span>
                  </div>
                  <p className="ml-2 text-sm font-semibold">Send Money</p>
                </button>

                <button
                  className="flex items-center text-pink-600 p-2 bg-pink-50 rounded-lg shadow"
                  onClick={() => navigate("/deposit")}
                >
                  <div className="bg-red-500 p-2 rounded-lg">
                    <span className="material-icons text-white">add</span>
                  </div>
                  <p className="ml-2 text-sm font-semibold">Add Money</p>
                </button>

                <button
                  className="flex items-center text-yellow-600 p-2 bg-yellow-50 rounded-lg shadow"
                  onClick={() => navigate("/loan")}
                >
                  <div className="bg-yellow-100 p-2 rounded-lg">
                    <span className="material-icons">account_balance_wallet</span>
                  </div>
                  <p className="ml-2 text-sm font-semibold">Loan</p>
                </button>

                <button
                  className="flex items-center text-green-600 p-2 bg-green-50 rounded-lg shadow"
                  onClick={() => navigate("/overview")}
                >
                  <div className="bg-green-100 p-2 rounded-lg">
                    <span className="material-icons">help</span>
                  </div>
                  <p className="ml-2 text-sm font-semibold">Need Help?</p>
                </button>
              </div>
            </div>

            <hr />
          </div>

          <div className="flex justify-evenly">

            <div className="bg-black  h-[70px] mr-2 text-[#ccc] shadow-lg px-4 py-2 rounded-lg mt-2 w-[200px]   text-center  pointer">
              <span className="text-[10px]">Account type</span> <br /><span className="uppercase font-semibold">{accountType}</span></div>

            <div className="bg-black h-[70px] mr-2  text-[#ccc] shadow-lg px-4 py-2 rounded-lg mt-2 w-[200px]   text-center  pointer">
              <span className="text-[10px]">Account type</span> <br /><span className="uppercase font-semibold">{subType}</span></div>


            
          </div>

          

          
          <div className="bg-[#ccc] mt-7 m-auto  text-[#000] shadow-lg px-4 py-2 rounded-lg mt-2 w-[200px]   text-center  pointer">
              <span className="text-[10px]">Limits</span> <br /><span className="uppercase font-semibold">${Number(Limit).toLocaleString()}.00</span></div>

       
         

          {/* Right Section */}
          <div className="lg:w-2/3 mt-6 lg:mt-0">
            <h2 className="text-gray-700 text-2xl font-medium mb-4 px-4 lg:px-0">
              Recent Transactions
            </h2>
            <div className="space-y-4 px-4 lg:px-0">
              {allTransactions.slice(0, visibleTransactions).map((transaction, index) => (
                <div key={index} className="bg-white shadow-lg p-4 rounded-lg">
                  <div className="flex justify-between">
                    <p className="font-bold text-xl">{transaction.type}</p>
                    <p className={`font-bold ${transaction.amount < 0 ? "text-red-500" : "text-green-500"}`}>
                      {transaction.amount < 0
                        ? `-$${Math.abs(transaction.amount).toLocaleString()}.00`
                        : `+$${transaction.amount.toLocaleString()}.00`}
                    </p>
                  </div>
                  {/* <p className="text-sm text-gray-500">{transaction.date}</p> */}
                </div>
              ))}
              <button
                onClick={loadMoreTransactions}
                className="mt-4 bg-purple-600 w-full text-white px-4 py-2 rounded-lg"
                disabled={visibleTransactions >= allTransactions.length}
              >
                {visibleTransactions >= allTransactions.length ? "No More Transactions" : "Load More"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <StatComponent/>
      <BottomNav />
    </>
  );
};

export default Dashboard;
