import React from "react";
import { useNavigate } from "react-router-dom";
import authServices from "./Services/AuthServices";
import alert from "./Services/Alert";
const SignIn = () => {
  let navigate = useNavigate();
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });
  function handleData(key, value) {
    setData({ ...data, [key]: value });
  }
  function login(e) {
    e.preventDefault();
    authServices
      .login(data)
      .then((data) => {
        if (data.userType == "patient") {
          alert.showSuccessAlert("You are logged in successfully!");
          navigate("/dashboard");
        } else if (data.userType == "doctor") {
          alert.showSuccessAlert("You are logged in successfully!");
          navigate("/doctorAppointments");
        } else if (data.userType == "respondant") {
          alert.showSuccessAlert("You are logged in successfully!");
        }
        window.location.reload(false);
        
      })
      .catch((err) => alert.showErrorAlert(err.message));
  }
  return (
    <section className="login-form shadow-lg">
      <div className="container">
        <div className="row from-row">
          <div className="col-lg-5 form-brand d-flex justify-content-center align-items-center">
            <div>
              <h1>AR MEDICARE</h1>
              <h3>Pakistan's Medicare is now online</h3>
            </div>
          </div>
          <div className="col-lg-7 px-5">
            <h2 className="mt-3">Login</h2>

            <form onSubmit={(e) => login(e)}>
              <div class="mb-3 col-lg-9">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => handleData("email", e.target.value)}
                  required
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3 col-lg-9">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => handleData("password", e.target.value)}
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary signIn-btn mb-5">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
