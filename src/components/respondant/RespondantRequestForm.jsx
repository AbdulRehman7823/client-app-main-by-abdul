import React from "react";
import { useLocation } from "react-router-dom";
import reportWebVitals from "./../../reportWebVitals";
import { useNavigate } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { TimePicker } from "@mui/x-date-pickers";
import { TextField, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import CheckIcon from "@mui/icons-material/Check";
import SaveIcon from "@mui/icons-material/Save";
import axios from "axios";
import alert from "../Services/Alert";
import authServices from "../Services/AuthServices"

const RespondantRequestForm = () => {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

 

 
  const handleSubmit = () => {
    if (isSugar) data.purposes.push("Sugar");
    if (isInject) data.purposes.push("Injections");
    if (isVital) data.purposes.push("Vital");
    if (isFirstAid) data.purposes.push("FirstAid");
    if (isBp) data.purposes.push("Blood-Pressure");
    data.datetime = date;

    console.log(data);
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      axios.post('http://localhost:3000/api/patient/request/respondant/'+authServices.getLoggedInUser()._id,{respondantId:respondant._id, data:data}).then((res)=>{
        alert.showSuccessAlert("Request Sent Successfully");
        setSuccess(true);
        setLoading(false);
        console.log(res);
      }).catch((err)=>{
        console.log("Error: " + err.message)
        alert.showErrorAlert("Error:"+err.message);
      })
    }
  };
  const location = useLocation();
  const navigate = useNavigate();
  const [respondant, setRespondant] = React.useState(location.state.respondant);
  const [data, setData] = React.useState({
    address: "",
    datetime: "",
    purposes: [],
    disease: "",
  });


  function handleData(key, value) {
    setData({ ...data, [key]: value });
  }

  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const [isSugar, setSugar] = React.useState(false);
  const [isInject, setInject] = React.useState(false);
  const [isVital, setVital] = React.useState(false);
  const [isBp, setBp] = React.useState(false);
  const [isFirstAid, setFirstAid] = React.useState(false);
  const [date, setDate] = React.useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div id="appointment-Section" className="mb-5">
      <div className="d-flex justify-content-center mb-3">
        <h1>Respondant Request Form</h1>
      </div>

      <section className=" ">
        <div className="container">
          <div className="row from-row shadow-lg" id="appointment-form">
            <div className="col-lg-6 form-brand text-center ">
              <h2 className="mt-3">Respondat Details</h2>
              <div className="row mt-5">
                <div className="col-lg-12 ">
                  <img
                    src={respondant.img}
                    alt="image"
                    id="appointmentDetailsimg"
                  />
                </div>

                <div className="col-lg-12 mt-5">
                  <h1>{respondant.username}</h1>
                </div>
              </div>
              <div className="row mt-3 ">
                <div className="col-lg-12">
                  <h6>Contact : {respondant.phone}</h6>
                  <h6> Email : {respondant.email} pkr</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-6 px-5">
              <div>
                <h2 className="mt-3">Patient Details</h2>
                <div class="mb-2 col-lg-9">
                  <label for="exampleInputPassword1" class="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    onChange={(e) => {
                      handleData("address", e.target.value);
                    }}
                    required
                  />
                </div>

                <div>
                  <label for="exampleInputPassword1" class="form-label">
                    Purpose
                  </label>
                  <FormGroup>
                    <Stack direction="row" spacing={6}>
                      <Stack direction="column" spacing={2}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={(e) => setSugar(e.target.checked)}
                            />
                          }
                          label="Sugar"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={(e) => setBp(e.target.checked)}
                            />
                          }
                          label="BP"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={(e) => setFirstAid(e.target.checked)}
                            />
                          }
                          label="First Aid"
                        />
                      </Stack>
                      <Stack direction="column" spacing={2}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={(e) => setVital(e.target.checked)}
                            />
                          }
                          label="Vital check"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={(e) => setInject(e.target.checked)}
                            />
                          }
                          label="Injection"
                        />
                      </Stack>
                    </Stack>
                  </FormGroup>
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

                <div className="form-group mb-2 col-lg-9">
                  <TextField
                    id="datetime-local"
                    label="Date&time"
                    type="datetime-local"
                    sx={{ width: 250 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setDate(e.target.value);
                      handleChange("datetime", e.target.value + "");
                    }}
                    required
                  />
                </div>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box sx={{ m: 1, position: "relative" }}>
                    <Fab
                      aria-label="save"
                      color="primary"
                      sx={buttonSx}
                      onClick={handleSubmit}
                    >
                      {success ? <CheckIcon /> : <SaveIcon />}
                    </Fab>
                    {loading && (
                      <CircularProgress
                        size={68}
                        sx={{
                          color: green[500],
                          position: "absolute",
                          top: -6,
                          left: -6,
                          zIndex: 1,
                        }}
                      />
                    )}
                  </Box>
                  <Box sx={{ m: 1, position: "relative" }}>
                    <Button
                      variant="contained"
                      sx={buttonSx}
                      disabled={loading}
                      onClick={handleSubmit}
                    >
                      Send Request
                    </Button>
                    {loading && (
                      <CircularProgress
                        size={24}
                        sx={{
                          color: green[500],
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          marginTop: "-12px",
                          marginLeft: "-12px",
                        }}
                      />
                    )}
                  </Box>
                </Box>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RespondantRequestForm;
