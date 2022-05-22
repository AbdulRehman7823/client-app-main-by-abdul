import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import axios from 'axios';
import authServices from '../Services/AuthServices';
import alert from '../Services/Alert';
import { useNavigate } from 'react-router-dom';

const RespondantRequest = ({ request }) => {


  const navigate = useNavigate();
  const accept = ()=>{
      axios.post("http://localhost:3000/api/respondant/accept/"+authServices.getLoggedInUser()._id,{patientId:request.patientId}).then(response=>{
        alert.showSuccessAlert("Successfully Accepted !!");
        console.log(response);
        navigate('/');
      }).catch(error=>{
        alert.showErrorAlert("Error: " + error.message);
      })
  }

  const reject  = ()=>{
    axios.post("http://localhost:3000/api/respondant/reject/"+authServices.getLoggedInUser()._id,{patientId:request.patientId}).then(response=>{
      alert.showSuccessAlert("Successfully Rejected !!")
      navigate('/');
    }).catch(error=>{
      alert.showErrorAlert("Error: " + error.message);
    })
  }


  
  return (

    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="140"
      image={request.img}
      alt="Patient"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {request.username}
      </Typography>
      <Typography variant="body1" >
        Disease
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {request.data.disease}
      </Typography>
      <Divider/>
      <Typography variant="body1" >
        Purposes:
      </Typography>
      {request.data.purposes.map((value,key) =><Typography key={key} variant="body2" color="text.secondary">
        {value}
      </Typography>)}
      <Divider/>
      <Typography gutterTop variant="body2" component="div" color="text.secondary">
        {request.data.address}
      </Typography>
      <Divider/>
      <Typography gutterTop variant="body2" component="div" color="text.secondary">
        {request.data.datetime}
      </Typography>
      <Divider/>
    </CardContent>
    <CardActions>
      <Button variant="contained" size="small" color="primary" onClick={accept}>Accept</Button>
      <Button variant="contained" size="small" color="secondary" onClick={reject}>Reject</Button>
    </CardActions>
  </Card>



  );
};

export default RespondantRequest;
