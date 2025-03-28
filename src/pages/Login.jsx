import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContextInstance";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      login({ email });
      navigate("/details");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <form className="p-6 bg-gray-300 shadow-md" onSubmit={handleLogin}>
        <h2 className="text-2xl font-semibold ml-53 mb-4">Login</h2>
        <input className="border p-2 mb-4 w-full" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input className="border p-2 mb-4 w-full" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button className="bg-blue-500 text-white text-xl px-4 py-2 w-full cursor-pointer hover:bg-blue-600" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
