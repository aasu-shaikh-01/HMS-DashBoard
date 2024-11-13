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
//     //   .get("http://localhost:4000/api/v1/user/admin/logout", {
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
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Sidebar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

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
      .get("http://localhost:4000/api/v1/user/admin/logout", {
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
      <nav className={`${!isAuthenticated ? "hidden" : "flex"}`}>
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
      </nav>
    </>
  );
};

export default Sidebar;
