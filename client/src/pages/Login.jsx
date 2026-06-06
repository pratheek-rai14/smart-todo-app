import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import { AuthContext } from "../context/AuthContext";
import "../styles/Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await loginUser({
      email,
      password,
    });

    localStorage.setItem(
      "userInfo",
      JSON.stringify(response.data)
    );

    setUser(response.data);

    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <p>
            Don't have an account?
            <span onClick={() => navigate("/register")}>
            Register
            </span>
        </p>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;