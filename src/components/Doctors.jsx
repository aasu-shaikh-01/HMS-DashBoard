import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Doctors = () => {
  const { isAuthenticated, url } = useContext(Context);
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  async function fetchDoctors() {
    try {
      const { data } = await axios.get(
        // "http://localhost:4000/api/v1/user/doctors",
        `${url}/api/v1/user/doctors`,
        {
          withCredentials: true,
        }
      );

      setDoctors(data.doctors);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  useEffect(() => {
    if (!isAuthenticated) {
      return navigate("/login");
    }
    fetchDoctors();
  });

  // return (
  //   <div>
  //     {doctors && doctors.length > 0 ? (
  //       doctors.map((element, index) => {
  //         return (
  //           <div>
  //             <div className="flex flex-wrap">
  //               <div key={index}>
  //                 <img
  //                   src={element.docAvatar && element.docAvatar.url}
  //                   alt="Doctors Avatar"
  //                   width={"150rem"}
  //                   height={"40rem"}
  //                 />
  //                 <p>
  //                   {element.firstName} {element.lastName}
  //                 </p>
  //               </div>
  //             </div>
  //           </div>
  //         );
  //       })
  //     ) : (
  //       <h1>No Registered Doctors Found!</h1>
  //     )}
  //   </div>
  // );
  return (
    <div>
      {doctors && doctors.length > 0 ? (
        <div className="flex flex-wrap w-full justify-center">
          {doctors.map((element, index) => (
            <div
              key={index}
              className="p-4 shadow-2xl bg-gray-400 min-h-48 m-4 mx-8 rounded-md min-w-44"
            >
              <img
                src={element.docAvatar && element.docAvatar.url}
                alt="Doctor's Avatar"
                // width="220rem"
                // height="100rem"
                className="rounded-full w-48 h-48 mx-auto"
              />
              <h2 className="text-xl text-black font-bold">
                {element.firstName} {element.lastName}
              </h2>
              <p>{element.email}</p>
              <p>{element.phone}</p>
              <p>{element.dob.substring(0, 10)}</p>
              <p>{element.department}</p>
              <p>{element.nic}</p>
              <p>{element.gender}</p>
            </div>
          ))}
        </div>
      ) : (
        <h1>No Registered Doctors Found!</h1>
      )}
    </div>
  );
};

export default Doctors;
