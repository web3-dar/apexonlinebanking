import { useNavigate } from "react-router-dom";
import {
  FaMoneyBillWave,
  FaMobileAlt,
  FaFileInvoice,
  FaCarAlt,
  FaUmbrella,
  FaExclamationCircle,
  FaHeart,
  FaArrowCircleLeft,
} from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";

import BottomNav from "../pages/stickyNav";

const payments = [
  { id: 1, name: "Money transfer", icon: <FaMoneyBillWave />, color: "text-green-600" },
  { id: 2, name: "Mobile payment", icon: <FaMobileAlt />, color: "text-blue-600" },
  { id: 3, name: "IBAN payment", icon: <RiBankFill />, color: "text-purple-600" },
  { id: 4, name: "Utility bills", icon: <FaFileInvoice />, color: "text-orange-600" },
  { id: 5, name: "Transport", icon: <FaCarAlt />, color: "text-gray-600" },
  { id: 6, name: "Insurance", icon: <FaUmbrella />, color: "text-indigo-600" },
  { id: 7, name: "Penalties", icon: <FaExclamationCircle />, color: "text-red-600" },
  { id: 8, name: "Charity", icon: <FaHeart />, color: "text-pink-600" },
];

const PaymentPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-6">
        <header className="w-full flex items-center justify-between py-4 border-b max-w-3xl">
          <button className="text-xl" onClick={() => navigate(-1)}>
            <FaArrowCircleLeft />
          </button>
          <h1 className="text-lg font-semibold">Payments</h1>
          <div className="w-8"></div>
        </header>

        <div className="w-full max-w-lg lg:max-w-3xl mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {payments.map((payment) => (
            <div
              key={payment.id}
              className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition cursor-pointer"
              onClick={() => navigate(`/payment/${payment.id}`)}
            >
              <div className="flex items-center space-x-4">
                <div className={`flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full ${payment.color}`}>
                  {payment.icon}
                </div>
                <span className="text-sm font-medium">{payment.name}</span>
              </div>
              <button className="text-blue-500">
                <AiOutlineInfoCircle className="text-lg" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </>
  );
};

export default PaymentPage;
