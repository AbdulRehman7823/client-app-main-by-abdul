import React from "react";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid px-0" id="footer">
      <div className="container">
        <div className="row ">
          <div className="col  mt-5">
            <h3>AR Medicare</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-6">
            <h4>contact us</h4>
            <i className="fa fa-phone fa-lg"></i> : +92 3093551238<br></br>
            <i className="fa fa-envelope fa-lg"></i> :
            <a className="text-white" href="mailto:confusion@food.net">
              armedicare@gmail.com
            </a>
          </div>
          <div className="col-lg-4 col-6 d-flex justify-content-center">
            <div>
              <h6>
                <a
                  className="text-white "
                  href="#"
                  onClick={(e) => navigate("/aboutus")}
                >
                  About us
                </a>
              </h6>
              <h6>
                <a
                  className="text-white"
                  href="#"
                  onClick={(e) => navigate("/privacyPolicy")}
                >
                  Privacy policy
                </a>
              </h6>
              <h6>
                <a
                  className="text-white"
                  href="#"
                  onClick={(e) => navigate("/faqs")}
                >
                  FAQ's
                </a>
              </h6>
            </div>
          </div>
          <div className="col-12 col-sm-4 align-self-center  ">
            <div className="text-center">
              <h4>Follow us</h4>
              <a
                className="btn btn-social-icon btn-google"
                href="http://google.com/+"
              >
                <i className="fa fa-google-plus"></i>
              </a>
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/profile.php?id="
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin"
                href="http://www.linkedin.com/in/"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                className="btn btn-social-icon btn-google"
                href="http://youtube.com/"
              >
                <i className="fa fa-youtube"></i>
              </a>
              <a className="btn btn-social-icon" href="mailto:">
                <i className="fa fa-envelope-o"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
