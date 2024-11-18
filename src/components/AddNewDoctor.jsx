import React, { useContext, useState } from "react";
import { Context } from "../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import logo from "../../public/logo.png";

const AddNewAdmin = () => {
  const { isAuthenticated, setIsAuthenticated, url } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  // const [role, setRole] = useState("");

  const handleAddNewAdmin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        // "http://localhost:4000/api/v1/user/admin/addnew",
        `${url}/api/v1/user/admin/addnew`,
        {
          firstName,
          lastName,
          email,
          phone,
          nic,
          dob,
          gender,
          password,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(response.data.message);
      // setIsAuthenticated(true);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const navigate = useNavigate();
  if (!isAuthenticated) {
    return navigate("/login");
  }
  return (
    <section>
      <div className="flex justify-center items-center min-h-96 flex-col bg-slate-300 mt-4">
        <img src={logo} width={"250rem"} />
        <h1 className="font-bold text-xl my-2">Add A New Admin</h1>
        <form
          onSubmit={handleAddNewAdmin}
          className="flex flex-wrap justify-center items-center gap-4 w-full text-black"
        >
          <input
            className="p-2 w-64 border-black rounded-sm"
            type="text"
            value={firstName}
            placeholder="firstName"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input
            className="p-2 w-64 border-black rounded-sm"
            type="text"
            value={lastName}
            placeholder="lastName"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <input
            className="p-2 w-64 border-black rounded-sm"
            type="email"
            value={email}
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            className="p-2 w-64 border-black rounded-sm"
            type="number"
            value={phone}
            placeholder="phone"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <input
            className="p-2 w-64 border-black rounded-sm"
            type="number"
            value={nic}
            placeholder="nic"
            onChange={(e) => {
              setNic(e.target.value);
            }}
          />
          <input
            className="p-2 w-64 border-black rounded-sm"
            type="date"
            value={dob}
            placeholder="dob"
            onChange={(e) => {
              setDob(e.target.value);
            }}
          />
          <select
            className="w-60 h-10 rounded-sm p-1"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            className="p-2 w-64 border-black rounded-sm"
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="flex justify-center items-center">
            <p className="text-gray-600 p-2">Already Registered?</p>
            <Link to={"/login"} className="text-blue-700">
              Login Now
            </Link>
          </div>
          <div className="w-full bg-slate-300 flex justify-center">
            <button
              type="submit"
              className="bg-black p-2 px-6 font-bold text-white rounded-full w-64"
            >
              ADD NEW ADMIN
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddNewAdmin;
