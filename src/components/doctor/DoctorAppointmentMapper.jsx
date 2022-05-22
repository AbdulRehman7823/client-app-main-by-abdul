import doctorServices from "../Services/DoctorServices";
import respondantServices from "../Services/RespondantServices";
import authServices from "../Services/AuthServices";
import React from "react";
import DoctorAppointment from "./DoctorAppointment";
const DoctorAppointmentMapper = () => {
  const [requests, setRequests] = React.useState([]);
  function setData() {
    doctorServices
      .getPatients(authServices.getLoggedInUser()._id)
      .then((data) => {
        setRequests(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  React.useEffect(setData, []);
  return (
    <div className="container" id="requestsPage">
      <h1 style={{ marginTop: "5rem" }}>Appointments</h1>
      {requests.length == 0 ? (
        <p>There are no appointments</p>
      ) : (
        <div className="row cardLayOut justify-content-center">
          {requests.map((appointment, key) => (
            <div className="col-lg-5 ">
              <DoctorAppointment key={key} appointment={appointment} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorAppointmentMapper;
