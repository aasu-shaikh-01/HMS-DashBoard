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
          // "http://localhost:4000/api/v1/message/getall",
          `${url}/api/v1/message/getall`,
          {
            withCredentials: true,
          }
        );
        setMessages(response.data.message);
      } catch (error) {
        console.error("Error occured while fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  if (!isAuthenticated) {
    return navigate("/login");
  }

  return (
    <div>
      <h2>MESSAGES</h2>
      <div className="flex gap-4 flex-wrap justify-center items-center">
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <div key={index} className="message">
              <p>
                <strong>Name:</strong> {message.firstName} {message.lastName}
              </p>
              <p>
                <strong>Email:</strong> {message.email}
              </p>
              <p>
                <strong>Phone:</strong> {message.phone}
              </p>
              <p>
                <strong>Message:</strong> {message.message}
              </p>{" "}
            </div>
          ))
        ) : (
          <p>Wait.....</p>
        )}
      </div>
    </div>
  );
};

export default Messages;
