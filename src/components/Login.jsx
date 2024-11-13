import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        {
          email,
          password,
          confirmPassword,
          role: "Admin",
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(response.data.message);
      setIsAuthenticated(true);
      navigate("/");

      // .then((res) => {
      //   toast.success(res.data.message);
      //   setIsAuthenticated(true);
      //   navigate("/");
      //   setEmail("");
      //   setPassword("");
      //   setConfirmPassword("");
      // });
    } catch (error) {
      toast.error(error.response.data.message);
      // console.log(error);
    }
  };

  if (isAuthenticated) {
    return navigate("/");
  }

  return (
    <div className="flex justify-center items-center flex-col">
      <img src="./logo.png" alt="logo" width={"250rem"} />
      <h1 className="font-bold text-xl my-2">WELCOME TO ZEECARE</h1>
      <p className="p-2">
        Only admins are allowed to access these resources!
      </p>{" "}
      <form
        onSubmit={handleLogin}
        className="flex justify-center items-center flex-col gap-4 w-full"
      >
        <input
          className="p-2 w-96 border-black text-black rounded-sm"
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="p-2 w-96 border-black text-black rounded-sm"
          type="text"
          value={password}
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          className="p-2 w-96 border-black text-black rounded-sm"
          type="text"
          value={confirmPassword}
          placeholder="confirm password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <button
          type="submit"
          className="bg-white p-2 px-6 font-bold text-black rounded-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
