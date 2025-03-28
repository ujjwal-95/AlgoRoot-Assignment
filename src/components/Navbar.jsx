import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContextInstance";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout, deleteUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl">Dashboard</h1>
      <div className="relative">
        <button
          className="bg-blue-500 px-4 py-2 rounded cursor-pointer"
          onClick={toggleDropdown}
        >
          ☰ 
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-md rounded">
            <div className="p-2">
              <span className="block mb-2">{user?.email}</span>
              <button
                className="bg-red-500 text-white px-3 py-1 w-full mb-2 cursor-pointer"
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
              >
                Logout
              </button>
              <button
                className="bg-gray-700 text-white px-3 py-1 w-full cursor-pointer"
                onClick={() => {
                  deleteUser();
                  navigate("/signup");
                }}
              >
                Delete Account
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;