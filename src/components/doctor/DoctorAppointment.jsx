import React from "react";
const DoctorAppointment = ({ appointment }) => {
  return (
    <div>
      <div class="card my-3 shadow-lg" style={{ maxWidth: "540px" }}>
        <div className="row">
          <div class="col-3 d-inline my-4">
            <img
              src={appointment.img}
              class="img-fluid rounded-circle ms-2"
              alt="..."
            />
          </div>
          <div class="col-9">
            <div class="card-body">
              <h5 class="card-title">{appointment.username}</h5>
              <p class="card-text">
                <a>{appointment.email}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointment;
