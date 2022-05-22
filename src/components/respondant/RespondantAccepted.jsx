import doctorServices from "../Services/DoctorServices";
import respondantServices from "../Services/RespondantServices";
import authServices from "../Services/AuthServices";
import React from "react";
import RespondantRequest from "./RespondantRequest";
import alert from "../Services/Alert";
import axios from "axios";


const RespondantAccepted = () => {
  const [requests, setRequests] = React.useState([]);
  function setData() {
    axios.get("http://localhost:3000/api/respondant/acceptedPatients/"+authServices.getLoggedInUser()._id)
    .then((data) => {
        setRequests(data.data);
     console.log(data.data);
      })
      .catch((err) => {
        alert.showErrorAlert(err.message)
      });
  }
  React.useEffect(setData, []);
  return (
    <div className="container" id="requestsPage">
      <h1 style={{ marginTop: "5rem" }}>Requests</h1>
      {requests.length == 0 ? (
        <p>There are no requests</p>
      ) : (
        <div className="row cardLayOut justify-content-center">
          {requests.map((request, key) => (
            <div className="col-lg-5 ">
              <RespondantRequest key={key} request={request} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RespondantAccepted;
