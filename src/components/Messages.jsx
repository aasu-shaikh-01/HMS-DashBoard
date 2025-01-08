import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { isAuthenticated, url } = useContext(Context);
  console.log(isAuthenticated);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/message/getall",
          // `${url}/api/v1/message/getall`,
          {
            withCredentials: true,
          }
        );
        setMessages(response.data.message);
      } catch (error) {
        console.error("Error occured while fetching messages:", error);
      }
    };

    if (!isAuthenticated) {
      return navigate("/login");
    }
    fetchMessages();
  }, []);

  return (
    // <div>
    //   <h2>MESSAGES</h2>
    //   <div className="gap-4 flex-wrap justify-center items-center">
    //     {messages.length > 0 ? (
    //       messages.map((message, index) => (
    //         <div key={index} className="message p-8 ">
    //           <p>
    //             <strong>Name:</strong> {message.firstName} {message.lastName}
    //           </p>
    //           <p>
    //             <strong>Email:</strong> {message.email}
    //           </p>
    //           <p>
    //             <strong>Phone:</strong> {message.phone}
    //           </p>
    //           <p>
    //             <strong>Message:</strong> {message.message}
    //           </p>{" "}
    //         </div>
    //       ))
    //     ) : (
    //       <p>Wait.....</p>
    //     )}
    //   </div>
    // </div>
    <div className="p-10 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          MESSAGES
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {messages.length > 0 ? (
            messages.map((message, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/3 bg-blue-50 border border-blue-200 shadow-sm rounded-lg p-6"
              >
                <p className="text-gray-700 mb-2">
                  <strong className="text-blue-600">Name:</strong>{" "}
                  {message.firstName} {message.lastName}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong className="text-blue-600">Email:</strong>{" "}
                  {message.email}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong className="text-blue-600">Phone:</strong>{" "}
                  {message.phone}
                </p>
                <p className="text-gray-700">
                  <strong className="text-blue-600">Message:</strong>{" "}
                  {message.message}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Wait.....</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
