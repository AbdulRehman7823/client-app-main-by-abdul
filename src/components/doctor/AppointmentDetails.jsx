import React from "react";
import { useLocation } from "react-router-dom";
import reportWebVitals from "./../../reportWebVitals";
import { useNavigate } from "react-router-dom";
const AppointmentDetails = () => {
  const location = useLocation();
  const navigate=useNavigate();
  const [doctor,setDoctor]=React.useState(location.state.doctor);
  const [data, setData] = React.useState({
    timing: "",
    address: "",
    timing: "",
    disease:""

  });
  const pay = ()=>{
    navigate('/payment',{state :{amount:data.fee}})
  } 
  function handleData(key, value) {
    setData({ ...data, [key]: value });
  }
  console.log(doctor);
  return (
    <div id="appointment-Section" className="mb-5">
      <div className="d-flex justify-content-center mb-3">
        <h1>Appointment Details</h1>
      </div>

      <section className=" ">
        <div className="container">
          <div className="row from-row shadow-lg" id="appointment-form">
            <div className="col-lg-6 form-brand text-center ">
              <h2 className="mt-3">Doctor Details</h2>
              <div className="row mt-5">
                <div className="col-lg-12 ">
                  <img
                    src={doctor.img}
                    alt="image"
                    id="appointmentDetailsimg"
                  />
                </div>

                <div className="col-lg-12 mt-5">
                  <h1>{doctor.username}</h1>
                </div>
              </div>
              <div className="row mt-3 ">
                <div className="col-lg-12">
                    <h6>Specialization : {doctor.specialization}</h6>
                    <h6> Fee : {doctor.fee} pkr</h6>
                    <h6> Timing : {doctor.timing}</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-6 px-5">
             <div>
             <h2 className="mt-3">Patient Details</h2>
              <form onSubmit={pay}>
                <div class="mb-2 col-lg-9">
                  <label for="exampleInputPassword1" class="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    onChange={(e) => {
                      handleData("username", e.target.value);
                    }}
                    required
                  />
                </div>
                <div class="mb-2 col-lg-9">
                  <label for="exampleInputEmail1" class="form-label">
                    Disease
                  </label>
                  <textarea
                    id="w3review"
                    name="exampleInputEmail1"
                    rows="4"
                    cols="50"
                    className="form-control"
                    onChange={(e) => {
                      handleData("disease", e.target.value);
                    }}
                    required
                  ></textarea>
                </div>
                <div class="mb-2 col-lg-9">
                  <label for="exampleInputPassword1" class="form-label">
                    Date
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    id="exampleInputPassword1"
                    onChange={(e) => {
                      handleData("date", e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="form-group mb-2 col-lg-9">
                  <label className="form-label " for="userType">
                    Select Time
                  </label>
                  <select
                    id="userType"
                    className="form-control dropdownMenu"
                    onChange={(e) => {
                      handleData("timinig", e.target.value);
                    }}
                    required
                  >
                    <option value="8 to 9">8 to 9</option>
                    <option value="9 to 10">9 to 10</option>
                    <option value="10 to 11">10 to 11</option>
                    <option value="11 to 12">11 to 12</option>
                  </select>
                </div>

                <button type="submit" class="btn btn-primary signIn-btn mb-5 mt-2">
                  Payment
                </button>
              </form>
             </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppointmentDetails;
