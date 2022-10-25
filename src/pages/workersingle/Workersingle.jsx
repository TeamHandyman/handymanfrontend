import "./workersingle.scss";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Statusbtn from "../../components/changestatus/Statusbtn"
import Ongoing from "../../components/workerprofilecharts/Ongoing"
import Jobtabs from "../../components/jobtabs/Jobtabs"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link, useParams } from "react-router-dom";
import {useEffect, useState} from 'react'
import axios from "axios";
import Select from 'react-select'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// export default function AlertDialog() {
  
//Tabs



function Workersingle (props) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const options = [
    { value: 'Active', label: 'Active' },
    { value: 'Disable', label: 'Disable' },
    
  ]

  // const [openViewnic, setViewnic] = useState(false)

  const {workerId} = useParams();
  const [userData, setuserData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  useEffect(() => {
     axios.get(`http://localhost:1337/api/worker/${workerId}`).then((response)=>{setuserData(response.data)})
     
  }, [workerId])

//  const ChangeStat = () => {
//    useEffect (() => {
//     axios.put(`http://localhost:1337/api/worker/changeStatus/${workerId}`, {status: selectedOption.value}).then(response => this.setState({ updatedAt: response.data.updatedAt }));
//   }, [selectedOption, workerId])
//  }
  const SelectedOptionChange= (e)=>{
    console.log(e.value)
    axios.put(`http://localhost:1337/api/worker/changeStatus/${workerId}`, {status: e.value}).then(window.location.reload(true))
    
  }
  return (
    <div className="workerSingle">
      <Sidebar />
      <div className="workerSingleContainer">
        <Navbar /> 
          <div className="top">
            
            <div className="left">
              
            <div className="item">
              <img src= {userData.profilePic} alt="" className="itemImg"/>
              <br />
              <div className="userName" style={{fontWeight:"bold"}}>{userData.fName} {userData.lName}</div>


              <div className="status">Status : <span style={{color: "green"}}>{userData.accountStatus} </span> </div>
           
              <Stack spacing={1}>
                  <Rating name="half-rating" defaultValue={2.5} precision={0.5} style={{justifyContent: "center", marginTop:"7px"}}readOnly />
              </Stack>

              <div className="editButton" >
              <Select
                defaultValue={selectedOption}
                onChange={(e)=>SelectedOptionChange(e)}
                options={options}
              />
              <br />
                   
              </div> 
              {/* <Button variant="outlined" color="success" onClick={ChangeStat}>confirm</Button> */}
              
              <hr className="hrBar"/>
              <br />


              <div className="details">
                <div className="detailItem">
                    <div className="itemKey"><LocationOnIcon className="icon"/> From  </div>
                    <div className="itemValue"> {userData.city} </div>
                    <br />
                    <br />
                    
                  </div>


                  <div className="detailItem">
                    <div className="itemKey"><EmailIcon className="icon"/> Email  </div>
                    <div className="itemValue"> {userData.email} </div>
                    <br />
                    <br />
                    
                  </div>

                  <div className="detailItem">
                    <div className="itemKey"><LocalPhoneIcon className="icon"/> Tel </div>
                    <div className="itemValue"> {userData.phone} </div>
                    <br />
                    <br />
                  </div>

                  <div className="detailItem">
                    <div className="itemKey"> <WorkIcon className="icon"/>Job Type  </div>
                    <div className="itemValue"> {userData.jobType} </div>
                    <br />
                    <br />
                  </div>
                  
                  <div className="detailItem">
                    <div className="itemKey"><EmailIcon className="icon"/> Email  </div>
                    <div className="itemValue"> {userData.email} </div>
                    <br />
                    <br />
                    
                  </div>

                  <div className="detailItem">
                    <div className="itemKey"><LocalPhoneIcon className="icon"/> Tel </div>
                    <div className="itemValue"> {userData.phone} </div>

                    <br />
                    <br />
                  </div>

                  <div className="detailItem">

                    <div className="itemKey"> <WorkIcon className="icon"/>Job Type  </div>
                    <div className="itemValue"> {userData.jobType} </div>
                    <br />
                    <br />
                  </div>

                  <div className="detailItem">

                    <div className="itemKey"> <PersonIcon className="icon"/> Member Since  </div>
                    <div className="itemValue"> 24/11/2021 </div>
                    <br />
                    <br />
                  </div>

              </div>

              <hr className="hrBar"/>
              <div>
                <Button style={{color: "#1c1c1c", border:"1px solid #1c1c1c"}} variant="outlined" onClick={handleClickOpen}>
                  View NIC 
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"National Identity Card"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">

                    {/* NIC CARD IMAGES  */}

                    <img src={userData.nicFront} alt="Nic Front Side" height={700} width ={550} />
                    <img src={userData.nicBack} alt="Nic Back Side" height={700} width ={550} />

                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button style={{color: "#1c1c1c", border:"1px solid #1c1c1c"}} onClick={handleClose}>Close</Button>
                    {/* <Button onClick={handleClose} autoFocus>
                      Agree
                    </Button> */}
                  </DialogActions>
                </Dialog>
              </div>
            
              
        
            
           
            </div>
            </div>
          
            <div className="right">
              
              <Jobtabs />


            </div>
          
          <div className="bottom">
               
          </div>
          
        </div>
      </div>
      </div>
    
  )
}


export default Workersingle
   