import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { isAuthenticated, url } = useContext(Context);
  const [appointments, setAppointments] = useState([]);
  const [status, setStatus] = useState("");
  console.log(status);

  console.log(appointments);
  const navigate = useNavigate();

  const fetchAppointments = async () => {
    try {
      const { data } = await axios.get(
        // "http://localhost:4000/api/v1/appointment/getall",
        `${url}/api/v1/appointment/getall`,
        {
          withCredentials: true,
        }
      );
      setAppointments(data.appointments);
    } catch (error) {
      console.log("some error occured while fetching appointments", error);
    }
  };

  const handleUpdateStatus = async (appointmentId, status) => {
    try {
      const { data } = await axios.put(
        // `http://localhost:4000/api/v1/appointment/update/${appointmentId}`,
        `${url}/api/v1/appointment/update/${appointmentId}`,
        { status },
        { withCredentials: true }
      );
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, status }
            : appointment
        )
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      return navigate("/login");
    }
    fetchAppointments();
  }, []);

  return (
    <div>
      <div className="flex bg-gray-400 m-4 rounded-md gap-2">
        <div className="w-1/2 flex justify-center items-center bg-violet-500">
          <img src="/doc.png" alt="Doctor" className="h-44" />
          <h1>
            Hello,{" "}
            <h2>
              Aasu Shaikh{" "}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                qui dolorum eos iste placeat veritatis eum exercitationem
              </p>
            </h2>
          </h1>
        </div>
        <div className="w-1/2 flex justify-center items-start my-auto text-xl">
          <h2 className="w-1/2">
            Total Appointments <h2 className="font-bold">1500</h2>
          </h2>
          <h2 className="w-1/2">
            Registered Doctors<h2 className="font-bold">20</h2>
          </h2>
        </div>
      </div>
      <h1 className="flex justify-center text-xl font-bold my-2">
        Appointments
      </h1>
      <div>
        {/* <table className="w-full">
          <thead className="flex justify-center">
            <tr>
              <th className="mx-4">
                <td>Patient</td>
              </th>
              <th>
                <td>Date</td>
              </th>
              <th>
                <td>Doctor</td>
              </th>
              <th>
                <td>Department</td>
              </th>
              <th>
                <td>Status</td>
              </th>
              <th>
                <td>Visited</td>
              </th>
            </tr>
          </thead>
          <tbody>
            {appointments && appointments.length > 0
              ? appointments.map((appointment) => (
                  <tr key={appointment._id}>
                    <td>
                      {appointment.firstName} {appointment.lastName}
                    </td>
                    <td>{appointment.appointment_date}</td>
                    <td>
                      {appointment.doctor.firstName}{" "}
                      {appointment.doctor.lastName}
                    </td>
                    <td>{appointment.department}</td>
                    <td>{appointment.status}</td>
                    <td>
                      {appointment.hasVisited ? (
                        <GoCheckCircleFill />
                      ) : (
                        <AiFillCloseCircle />
                      )}
                    </td>
                  </tr>
                ))
              : "Appointment Not Found"}
          </tbody>
        </table> */}
        <table className="mx-auto">
          <thead>
            <tr>
              <th className="px-16">Patient</th>
              <th className="px-16">Date</th>
              <th className="px-16">Doctor</th>
              <th className="px-16">Department</th>
              <th className="px-16">Status</th>
              <th className="px-16">Visited</th>
            </tr>
          </thead>
          <tbody>
            {appointments && appointments.length > 0 ? (
              appointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td className="px-16">
                    {appointment.firstName} {appointment.lastName}
                  </td>
                  <td className="px-16">{appointment.appointment_date}</td>
                  <td className="px-16">
                    {appointment.doctor.firstName} {appointment.doctor.lastName}
                  </td>
                  <td className="px-16">{appointment.department}</td>
                  <select
                    value={appointment.status}
                    className="text-black"
                    onChange={(e) =>
                      handleUpdateStatus(appointment._id, e.target.value)
                    }
                  >
                    <option value="Pending">Pending</option>
                    <option value="Accepted">Accepted</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                  {/* <td className="px-16">{appointment.status}</td> */}
                  <td className="px-16">
                    {appointment.hasVisited ? (
                      <GoCheckCircleFill />
                    ) : (
                      <AiFillCloseCircle />
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  Appointment Not Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
