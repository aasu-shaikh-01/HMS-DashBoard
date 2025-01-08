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
        "http://localhost:4000/api/v1/user/admin/addnew",
        // `${url}/api/v1/user/admin/addnew`,
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
    // <section>
    //   <div className="flex justify-center items-center min-h-96 flex-col bg-slate-300 mt-4">
    //     <img src={logo} width={"250rem"} />
    //     <h1 className="font-bold text-xl my-2">Add A New Admin</h1>
    //     <form
    //       onSubmit={handleAddNewAdmin}
    //       className="flex flex-wrap justify-center items-center gap-4 w-full text-black"
    //     >
    //       <input
    //         className="p-2 w-64 border-black rounded-sm"
    //         type="text"
    //         value={firstName}
    //         placeholder="firstName"
    //         onChange={(e) => {
    //           setFirstName(e.target.value);
    //         }}
    //       />
    //       <input
    //         className="p-2 w-64 border-black rounded-sm"
    //         type="text"
    //         value={lastName}
    //         placeholder="lastName"
    //         onChange={(e) => {
    //           setLastName(e.target.value);
    //         }}
    //       />
    //       <input
    //         className="p-2 w-64 border-black rounded-sm"
    //         type="email"
    //         value={email}
    //         placeholder="email"
    //         onChange={(e) => {
    //           setEmail(e.target.value);
    //         }}
    //       />

    //       <input
    //         className="p-2 w-64 border-black rounded-sm"
    //         type="number"
    //         value={phone}
    //         placeholder="phone"
    //         onChange={(e) => {
    //           setPhone(e.target.value);
    //         }}
    //       />
    //       <input
    //         className="p-2 w-64 border-black rounded-sm"
    //         type="number"
    //         value={nic}
    //         placeholder="nic"
    //         onChange={(e) => {
    //           setNic(e.target.value);
    //         }}
    //       />
    //       <input
    //         className="p-2 w-64 border-black rounded-sm"
    //         type="date"
    //         value={dob}
    //         placeholder="dob"
    //         onChange={(e) => {
    //           setDob(e.target.value);
    //         }}
    //       />
    //       <select
    //         className="w-60 h-10 rounded-sm p-1"
    //         onChange={(e) => {
    //           setGender(e.target.value);
    //         }}
    //       >
    //         <option value="">Select Gender</option>
    //         <option value="Male">Male</option>
    //         <option value="Female">Female</option>
    //       </select>
    //       <input
    //         className="p-2 w-64 border-black rounded-sm"
    //         type="password"
    //         value={password}
    //         placeholder="password"
    //         onChange={(e) => {
    //           setPassword(e.target.value);
    //         }}
    //       />
    //       <div className="flex justify-center items-center">
    //         <p className="text-gray-600 p-2">Already Registered?</p>
    //         <Link to={"/login"} className="text-blue-700">
    //           Login Now
    //         </Link>
    //       </div>
    //       <div className="w-full bg-slate-300 flex justify-center">
    //         <button
    //           type="submit"
    //           className="bg-black p-2 px-6 font-bold text-white rounded-full w-64"
    //         >
    //           ADD NEW ADMIN
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </section>
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <div className="text-center mb-8">
          <img src={logo} alt="ZeeCare Logo" className="mx-auto w-40" />
          <h1 className="text-3xl font-bold text-gray-800 mt-4">
            Add A New Admin
          </h1>
        </div>
        <form onSubmit={handleAddNewAdmin} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="NIC"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-center items-center mt-4">
            <p className="text-gray-600 mr-2">Already Registered?</p>
            <Link to="/login" className="text-blue-700 hover:underline">
              Login Now
            </Link>
          </div>
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add New Admin
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddNewAdmin;
