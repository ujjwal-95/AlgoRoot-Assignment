import { AuthContext } from "./AuthContextInstance";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);

  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login", { replace: true }); 
  };

  const deleteUser = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login", { replace: true }); 
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, deleteUser }}>
      {children}
    </AuthContext.Provider>
  );
};
