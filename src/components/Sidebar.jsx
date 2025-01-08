// import React, { useContext, useState } from "react";
// // import { Context } from "../main";
// import { TiHome } from "react-icons/ti";
// import { RiLogoutBoxFill } from "react-icons/ri";
// import { AiFillMessage } from "react-icons/ai";
// // import { GiHamburgerMenu } from "react-icons/gi";
// import { FaUserDoctor } from "react-icons/fa6";
// import { MdAddModerator } from "react-icons/md";
// import { IoPersonAddSharp } from "react-icons/io5";
// import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import { toast } from "react-toastify";

// const Sidebar = () => {
//   const [show, setShow] = useState(true);

//   // const { isAuthenticated, setIsAuthenticated } = useContext(Context);
//   // console.log(isAuthenticated);

//   const navigate = useNavigate();

//   const gotoHome = () => {
//     navigate("/");
//
//   };
//   const gotoDoctorsPage = () => {
//     navigate("/doctors");
//
//   };
//   const gotoMessage = () => {
//     navigate("/messages");
//
//   };
//   const gotoAddNewDoctor = () => {
//     navigate("/doctor/addnew");
//
//   };
//   const gotoAddNewAdmin = () => {
//     navigate("/admin/addnew");
//
//   };

//   const handleLogout = async () => {
//     // await axios
//     //   .get("https://hms-backend-czxa.onrender.com/api/v1/user/admin/logout", {
//     //     withCredentials: true,
//     //   })
//     //   .then((res) => {
//     //     toast.success(res.data.message);
//     //     setIsAuthenticated(false);
//     //   })
//     //   .catch((err) => {
//     //     toast.error(err.response.data.message);
//     //   });
//   };

//   return (
//     <>
//       {/* <div
//         className={`${!isAuthenticated ? "hidden" : "flex"} text-3xl pl-2 pt-2`}
//       >
//         <GiHamburgerMenu
//           onClick={() => {
//
//           }}
//         />
//       </div> */}
//       <nav
//         // className={`${!isAuthenticated ? "hidden" : "flex"} mt-36 pl-2 ${
//         //   show ? "hidden" : "flex"
//         className="w-8"
//       >
//         <span className="text-3xl flex justify-center items-center flex-col gap-4">
//           <TiHome onClick={gotoHome} />
//           <FaUserDoctor onClick={gotoDoctorsPage} />
//           <MdAddModerator onClick={gotoAddNewAdmin} />
//           <IoPersonAddSharp onClick={gotoAddNewDoctor} />
//           <AiFillMessage onClick={gotoMessage} />
//           <RiLogoutBoxFill onClick={handleLogout} />
//         </span>
//       </nav>

//       {/* <div className={`${isAuthenticated ? "hidden" : "flex"}`}>
//         <GiHamburgerMenu
//           onClick={() => {
//
//           }}
//         />
//       </div> */}
//     </>
//   );
// };

// export default Sidebar;

import React, { useContext } from "react";
import { Context } from "../main";
import { TiHome } from "react-icons/ti";
import { RiLogoutBoxFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAddModerator } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Sidebar = () => {
  const { isAuthenticated, setIsAuthenticated, url } = useContext(Context);

  const navigate = useNavigate();

  const gotoHome = () => {
    navigate("/");
  };
  const gotoDoctorsPage = () => {
    navigate("/doctors");
  };
  const gotoMessage = () => {
    navigate("/messages");
  };
  const gotoAddNewDoctor = () => {
    navigate("/doctor/addnew");
  };
  const gotoAddNewAdmin = () => {
    navigate("/admin/addnew");
  };

  const handleLogout = async () => {
    await axios
      .get("https://hms-backend-czxa.onrender.com/api/v1/user/admin/logout", {
        // .get(`${url}/api/v1/user/admin/logout`, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
    navigate("/login");
  };

  return (
    <>
      {/* <nav className={`${!isAuthenticated ? "hidden" : "flex"}`}>
        <div className="flex justify-end items-center gap-12 mx-auto my-2">
          <span
            onClick={gotoHome}
            className="flex cursor-pointer justify-center items-center gap-2"
          >
            HOME
            <TiHome className="text-xl" />
          </span>
          <span
            onClick={gotoDoctorsPage}
            className="flex cursor-pointer justify-center items-center gap-2"
          >
            DOCTORS
            <FaUserDoctor className="text-xl" />
          </span>
          <span
            onClick={gotoAddNewAdmin}
            className="flex cursor-pointer justify-center items-center gap-2"
          >
            ADD DOCTOR
            <MdAddModerator className="text-xl" />
          </span>
          <span
            onClick={gotoAddNewDoctor}
            className="flex cursor-pointer justify-center items-center gap-2"
          >
            ADD ADMIN
            <IoPersonAddSharp className="text-xl" />
          </span>
          <span
            onClick={gotoMessage}
            className="flex cursor-pointer justify-center items-center gap-2"
          >
            MESSAGE
            <AiFillMessage className="text-xl" />
          </span>
          <span
            onClick={handleLogout}
            className="flex cursor-pointer justify-center items-center gap-2"
          >
            LOGOUT
            <RiLogoutBoxFill className="text-xl" />
          </span>
        </div>
      </nav> */}
      <nav
        className={`${
          !isAuthenticated ? "hidden" : "flex"
        } bg-white shadow-md py-4 sticky top-0 z-50`}
      >
        <div className="flex justify-between items-center gap-8 mx-auto container px-8">
          <Link to={"/"}><img src="./logo.png" width={"130rem"} alt="" /></Link>
          <span
            onClick={gotoHome}
            className="flex cursor-pointer items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors"
          >
            <TiHome className="text-2xl" />
            <span className="text-lg font-medium">HOME</span>
          </span>
          <span
            onClick={gotoDoctorsPage}
            className="flex cursor-pointer items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors"
          >
            <FaUserDoctor className="text-2xl" />
            <span className="text-lg font-medium">DOCTORS</span>
          </span>
          <span
            onClick={gotoAddNewAdmin}
            className="flex cursor-pointer items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors"
          >
            <MdAddModerator className="text-2xl" />
            <span className="text-lg font-medium">ADD DOCTOR</span>
          </span>
          <span
            onClick={gotoAddNewDoctor}
            className="flex cursor-pointer items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors"
          >
            <IoPersonAddSharp className="text-2xl" />
            <span className="text-lg font-medium">ADD ADMIN</span>
          </span>
          <span
            onClick={gotoMessage}
            className="flex cursor-pointer items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors"
          >
            <AiFillMessage className="text-2xl" />
            <span className="text-lg font-medium">MESSAGE</span>
          </span>
          <span
            onClick={handleLogout}
            className="flex cursor-pointer items-center gap-2 text-gray-700 hover:text-red-500 transition-colors"
          >
            <RiLogoutBoxFill className="text-2xl" />
            <span className="text-lg font-medium">LOGOUT</span>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
