import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const BottomNav: React.FC = () => {
  return (
    <nav className="sticky bottom-0 bg-white border-t border-gray-200 p-4 flex justify-around">
      <Link
        to="/overview"
        className="flex flex-col items-center text-gray-600 hover:text-purple-400 "
      >
        <span className="material-icons">dashboard</span>
        <span className="text-xs mt-1">Overview</span>
      </Link>
      <Link
        to="/history"
        className="flex flex-col items-center text-gray-600 hover:text-purple-400 "
      >
        <span className="material-icons">history</span>
        <span className="text-xs mt-1">History</span>
      </Link>
      <Link
        to="/dashboard"
        className="flex flex-col items-center text-gray-600 hover:text-purple-400 "
      >
        <FaHome className="text-2xl" />
        <span className="text-xs mt-1">Home</span>
      </Link>
      <Link
        to="/cards"
        className="flex flex-col items-center text-gray-600 hover:text-purple-400 "
      >
        <span className="material-icons">credit_card</span>
        <span className="text-xs mt-1">My Cards</span>
      </Link>
      <Link
        to="/settings"
        className="flex flex-col items-center text-gray-600 hover:text-purple-400 "
      >
        <span className="material-icons">settings</span>
        <span className="text-xs mt-1">Settings</span>
      </Link>
    </nav>
  );
};

export default BottomNav;
