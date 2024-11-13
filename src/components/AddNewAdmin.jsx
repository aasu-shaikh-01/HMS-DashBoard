import React, { useContext, useState } from "react";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import logo from "../../public/logo.png";
import profilePic from "../../public/docHolder.webp";

const AddNewDoctor = () => {
  const { isAuthenticated } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [doctorDepartment, setDoctorDepartment] = useState("");
  const [docAvatar, setDocAvatar] = useState("");
  const [docAvatarPreview, setDocAvatarPreview] = useState("");

  const navigate = useNavigate();

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Radiology",
    "Oncology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  // const handleAvatar = async (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     setDocAvatarPreview(reader.result);
  //     setDocAvatar(file);
  //   };
  // };
  const handleAvatar = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setDocAvatarPreview(reader.result);
      setDocAvatar(file);
    };
  };

  const handleAddNewDoctor = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("nic", nic);
      formData.append("dob", dob);
      formData.append("gender", gender);
      formData.append("password", password);
      formData.append("doctorDepartment", doctorDepartment);
      formData.append("docAvatar", docAvatar);
      formData.append("docAvatarPreview", docAvatarPreview);

      const response = await axios.post(
        "http://localhost:4000/api/v1/user/doctor/addnew",
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      toast.success(response.data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  if (!isAuthenticated) {
    return navigate("/login");
  }
  return (
    <section>
      <div className="flex justify-center items-center min-h-96 flex-col bg-slate-300 mt-4">
        <img src={logo} width={"250rem"} />
        <h1 className="font-bold text-xl my-2">REGISTER A NEW DOCTOR</h1>
        <form
          onSubmit={handleAddNewDoctor}
          className="flex flex-wrap justify-center items-center gap-4 w-full text-black"
        >
          <div className="flex justify-center items-center w-full border-black rounded-sm">
            <div className="flex flex-col w-full p-8">
              <img
                src={docAvatarPreview ? `${docAvatarPreview}` : profilePic}
                className="h-[30rem]"
                alt="Doctor-Avatar"
              />
              <div className="p-2 border-2 mt-4 -mb-4 border-black rounded-lg w-full">
                <input type="file" onChange={handleAvatar} />
              </div>
            </div>
          </div>
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
            placeholder="phone number"
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
          <select
            value={doctorDepartment}
            onChange={(e) => {
              setDoctorDepartment(e.target.value);
            }}
          >
            <option value="">Select Department</option>
            {departmentsArray.map((element, index) => {
              return (
                <option value={element} key={index}>
                  {element}
                </option>
              );
            })}
          </select>
          {/* <div className="flex justify-center items-center">
            <p className="text-gray-600 p-2">Already Registered?</p>
            <Link to={"/login"} className="text-blue-700">
              Login Now
            </Link>
          </div> */}
          <div className="w-full bg-slate-300 flex justify-center">
            <button
              type="submit"
              className="bg-black p-2 px-6 font-bold text-white rounded-full w-64"
            >
              Register New Doctor
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddNewDoctor;
