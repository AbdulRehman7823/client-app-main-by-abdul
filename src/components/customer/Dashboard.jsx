import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    let navigate = useNavigate();
    return (
        <div className="container-fluid px-0">
            <div className="row container-fluid px-0 mx-auto dashboard-brand">
                <div className="px-0 col-lg-5 col-6 m-5  text-dark ">
                    <div className="ms-5 mt-5 text-white">
                        <h1 className="">We have Best Medicare plan options for you</h1>
                        <h5>Find a doctor today and book your appointment online NOW</h5>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row my-3 justify-content-center">
                    <div className="col-lg-4 text-center">
                        <h1>Our Services</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-5  ">
                        <div className="card my-3 shadow" style={{ maxWidth: "540px" }}>
                            <div className="row">
                                <div className="col-4 d-inline">
                                    <img
                                        src="images/doctoLogo.png"
                                        className="img-fluid rounded-circle"
                                        alt="..."
                                    />
                                </div>
                                <div className="col-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Doctors</h5>
                                        <p className="card-text"></p>
                                        <button
                                            className="btn btn-card btn-primary"
                                            onClick={() => navigate("/doctors")}
                                        >
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5  ">
                        <div className="card my-3 shadow" style={{ maxWidth: "540px" }}>
                            <div className="row">
                                <div className="col-4 d-inline">
                                    <img
                                        src="images/nurseLogo.jpg"
                                        className="img-fluid rounded-circle"
                                        alt="..."
                                    />
                                </div>
                                <div className="col-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Respondants</h5>
                                        <p className="card-text"></p>
                                        <button className="btn btn-card btn-primary">
                                            Consult Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
        <div className="text-center mb-4 ">     
          <h3 className="text-center mb-5 mt-2 pb-2 text-primary fw-bold">Find doctors by health concern</h3>
          </div>
          <div className="row justify-content-center">
          <div className="row mt-2 text-center text-dark">
                <div className="col-md-2">
                <div className="img-holder">
                <img className="findDoc" src="https://cdn-icons-png.flaticon.com/512/846/846995.png" alt="" />
                    </div>
                    <div >
                        <h5 className="font-weight-bold mt-4"> Gynecologist
                        </h5>
                        
                    </div>
                </div>
                <div className="col-md-2 ">
                    <div className="img-holder ">
                    <img className="findDoc" src="https://cdn-icons.flaticon.com/png/512/3464/premium/3464691.png?token=exp=1653086589~hmac=ef36d1bd6dea4f378a91a9064e326a4c" alt="" />
                    </div>
                    <div>
                        <h5 className="font-weight-bold mt-4"> Skin Specialist
                        </h5>
                        
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="img-holder">
                    <img className="findDoc" src="https://cdn-icons.flaticon.com/png/512/3280/premium/3280979.png?token=exp=1653086709~hmac=e1be10a206d9fea0134d3f052346f722" alt="" />
                    </div>
                    <div >
                        <h5 className="font-weight-bold mt-4">Child Specialist
                        </h5>
                        
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="img-holder">
                    <img className="findDoc" src="https://cdn-icons.flaticon.com/png/512/2547/premium/2547870.png?token=exp=1653086840~hmac=96c4ca0ec96ccbfd6d15a6bc0c0496a0" alt="" />
                    </div>
                    <div >
                        <h5 className="font-weight-bold mt-4"> Eye Specialist
                        </h5>
                        
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="img-holder">
                    <img className="findDoc" src="https://cdn-icons-png.flaticon.com/512/4228/4228719.png" alt="" />
                    </div>
                    <div >
                        <h5 className="font-weight-bold mt-4"> Diagnostics
                        </h5>
                        
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="img-holder">
                    <img className="findDoc" src="https://cdn-icons-png.flaticon.com/512/2332/2332795.png" alt="" />
                    </div>
                    <div >
                        <h5 className="font-weight-bold mt-4">ENT Specialist
                        </h5>
                    </div>
                </div>
            </div>
            
          </div>
          </div>
            
          <div className="container mt-5">
        <div className="text-center mb-4 ">     
          <h3 className="text-center mb-5 mt-2 pb-2 text-primary fw-bold">Top Searched Diseases</h3>
          </div>
          <div className="row justify-content-center">
          <div className="row mt-2 text-center text-dark">
                <div className="col-md-2">
                <div className="img-holder">
                <img className="findDoc" src="https://cdn-icons-png.flaticon.com/512/2927/2927404.png" alt="" />
                    </div>
                    <div >
                        <h5 className="font-weight-bold mt-4"> Cholera
                        </h5>
                        
                    </div>
                </div>
                <div className="col-md-2 ">
                    <div className="img-holder ">
                    <img className="findDoc" src="https://cdn-icons.flaticon.com/png/512/173/premium/173042.png?token=exp=1653088444~hmac=b1afe61a7b842aa795b3ce438fbc7a01" alt="" />
                    </div>
                    <div>
                        <h5 className="font-weight-bold mt-4"> Diabetes
                        </h5>
                        
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="img-holder">
                    <img className="findDoc" src="https://cdn-icons-png.flaticon.com/512/1754/1754532.png" alt="" />
                    </div>
                    <div >
                        <h5 className="font-weight-bold mt-4">Migraine
                        </h5>
                        
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="img-holder">
                    <img className="findDoc" src="https://cdn-icons-png.flaticon.com/512/6945/6945640.png" alt="" />
                    </div>
                    <div >
                        <h5 className="font-weight-bold mt-4"> Hernia
                        </h5>
                        
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="img-holder">
                    <img className="findDoc" src="https://cdn-icons-png.flaticon.com/512/940/940668.png" alt="" />
                    </div>
                    <div >
                        <h5 className="font-weight-bold mt-4"> PCOS
                        </h5>
                        
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="img-holder">
                    <img className="findDoc" src="https://cdn-icons.flaticon.com/png/512/3214/premium/3214036.png?token=exp=1653088211~hmac=64dce37e9ae70a49525e2a44de4e7afd" alt="" />
                    </div>
                    <div >
                        <h5 className="font-weight-bold mt-4">Covid 19
                        </h5>
                    </div>
                </div>
            </div>
            
          </div>
          </div>


                <div className="featuresText">
                    <h1> How it Works</h1>
                </div>

                <div className="container">
                    <div className="features row featuresDiv">
                        <div className="featuresdiv col-md-6">
                            <h1>
                                Choose from our list of specialists
                            </h1>
                            <h4>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum fugit amet rerum veniam ducimus doloribus, in tempore accusantium necessitatibus architecto reprehenderit nostrum inventore. Illum quo dolorem distinctio, totam ipsa commodi!
                            </h4>
                        </div>
                        <div className="col-md-6">
                            <img className="doctorImage rounded-circle" src="https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg" alt="" />
                        </div>
                    </div>
                    <div className="features row">
                        <div className="col-md-6">
                            <img className="doctorImage rounded-circle" src="https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg" alt="" />
                        </div>
                        <div className="featuresdiv col-md-6">
                            <h1>
                                Pick up from our list of verified doctors
                            </h1>
                            <h4>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, suscipit molestias aliquid blanditiis quisquam vel accusantium est, sed dignissimos praesentium libero tempora voluptate. Reprehenderit doloremque nesciunt explicabo modi voluptas illum!
                            </h4>
                        </div>
                    </div>
                    <div className="features row featuresDiv">
                        <div className="featuresdiv col-md-6">
                            <h1>
                                Begin your consultation
                            </h1>
                            <h4>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas totam harum dolore, eveniet facilis adipisci beatae earum porro blanditiis ad culpa distinctio sapiente sequi ipsum laudantium corporis magni omnis at!
                            </h4>
                        </div>
                        <div className="col-md-6">
                            <img className="doctorImage rounded-circle " src="https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;
