import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from './stickyNav';
import { FiSettings } from "react-icons/fi";

const SettingsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<{ firstName: string; middleName: string; lastName: string ; profilePicture: string } | null>(null);
  const navigate = useNavigate();
  const fullName = user ? `${user.firstName} ${user.middleName} ${user.lastName}` : "";

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    setIsLoading(true);
    setTimeout(() => {
      localStorage.clear();
      sessionStorage.clear();
      setIsLoading(false);
      navigate('/');
    }, 2000);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-16 h-16 border-4 border-purple-500 border-dotted rounded-full animate-spin"></div>
        <p className="mt-4 text-xl font-semibold text-black">Processing...</p>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-6 px-4 md:px-8 lg:px-16">
        <div className="bg-white shadow-xl rounded-xl w-full max-w-4xl overflow-hidden">
          <header className="bg-[#000] text-white  py-6 md:py-8">
            <h1 className="text-2xl md:text-3xl font-semibold p-2"><FiSettings className="text-2xl" /></h1>
          </header>

          <div className="flex justify-center relative -mt-12">
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-purple-500 shadow-md">
              <img
                src={user?.profilePicture || '/src/assets/default-avatar.png'}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            <div>
              <h2 className="text-sm font-bold text-gray-700 mb-4">Profile Settings</h2>
              <ul className="space-y-4">
                {[
                  { name: fullName || 'User', sub: 'Profile Settings', action: 'Edit' },
                  { name: 'Account Limits', sub: 'View account limits', action: 'View' },
                  { name: 'Statements & Reports', sub: 'Download monthly statements.' },
                  { name: 'Referrals', sub: 'Earn money when your friends join.' },
                  { name: '24/7 Help Center', sub: 'Have an issue? Speak to our team.' },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex items-center space-x-3">
                 <FiSettings className='text-2xl'/>
                      <div>
                        <p className="text-sm font-medium text-gray-800">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.sub}</p>
                      </div>
                    </div>
                    {item.action && (
                      <button className="text-purple-500 text-sm font-semibold">{item.action}</button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-bold text-gray-700 mb-4">Password & Security</h2>
              <ul className="space-y-4">
                <li className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition">
                  <span className="text-sm font-medium text-gray-800">Update Password</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-400"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li
                  onClick={handleLogout}
                  className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
                >
                  <span className="text-sm font-medium text-gray-800">Log out</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-400"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
              </ul>
            </div>
          </div>

          <footer className="text-center text-gray-500 text-xs py-4 bg-gray-50">
            Version 9.8.0
          </footer>
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default SettingsPage;