import "./workersingle.scss";
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
//Tabs



function Workersingle (props) {
  const {workerId} = useParams();
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios.get(`http://localhost:1337/api/workerProfile/id=${userId}`).then((response)=>{setData(response.data)})
  // }, [userId])
  //console.log(data)
  return (
    <div className="workerSingle">
      <Sidebar />
      <div className="workerSingleContainer">
        <Navbar /> 
          <div className="top">
            <div className="left">
             
              <div className="item">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" alt="" className="itemImg"/>
                <br />
                <div className="userName" style={{fontWeight:"bold"}}>Sanath Perera</div>


                <div className="status">Status : <span style={{color: "green"}}>Active </span> </div>
             
                <Stack spacing={1}>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} style={{justifyContent: "center", marginTop:"7px"}}readOnly />
                </Stack>
               
                {/* <div className="editButton" >
                     Change Status
                     <ArrowDropDownIcon />
                </div>  */}
                <br />
                <Statusbtn />
                <br />
                
                <hr className="hrBar"/>
                <br />


                <div className="details">
                <div className="detailItem">
                    <div className="itemKey"><LocationOnIcon className="icon"/> From  </div>
                    <div className="itemValue"> Gampaha </div>
                    <br />
                    <br />
                    
                  </div>

                  <div className="detailItem">
                    <div className="itemKey"><EmailIcon className="icon"/> Email  </div>
                    <div className="itemValue"> sana@gmail.com </div>
                    <br />
                    <br />
                    
                  </div>

                  <div className="detailItem">
                    <div className="itemKey"><LocalPhoneIcon className="icon"/> Tel </div>
                    <div className="itemValue"> 077 3935136 </div>
                    <br />
                    <br />
                  </div>

                  <div className="detailItem">
                    <div className="itemKey"> <WorkIcon className="icon"/>Job Type  </div>
                    <div className="itemValue"> Plumber </div>
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

              </div>
             
            </div>
            
            <div className="right">
              
              <Jobtabs />


            </div>
          </div>
          <div className="bottom"></div>
      </div>
    </div>
  )
}


export default Workersingle
   