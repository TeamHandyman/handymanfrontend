import "./workerstable.scss"
//import { DataGrid } from '@mui/x-data-grid';
//import { userRows, userColumns } from "../../workersTableSource";
import { Link, useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react'
import axios from "axios";
import './style.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const Workerstable = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:1337/api/worker').then((response)=>{setData(response.data)})
  }, [])
  //console.log(data.fName)

  const navigate = useNavigate();
  const viewPro = () => { axios.put('http://localhost:1337/api/worker')}


  
  
  return (

    <div className="workerstable">
    {/* <div onload="makeTableScroll();">
    <div className="scrollingTable"> */}
      <table className="table">
          <thead className="th">
              <th>First Name</th>
              <th>Last Name</th>
              <th>District</th>
              <th>Status</th>
              <th>Profile</th>
              <th>ACTION</th>
          </thead>
          <tbody className="tb">
            {data.map((x) => <tr style={{ 'marginLeft': "5rem" }} className="tr" key={x.id}>

              <td className="td">{x.fName}</td>
              <td className="td">{x.lName}</td>
              <td className="td">{x.district}</td>
              <td className="td-B">{x.accountStatus}</td>
              <Link to={ `/workers/${x._id}`} className="linkStlyes"> 

                   <td className="td-A"><Button variant="outlined" color="secondary" size="small">View</Button></td>
              </Link>
              <td className="td-A"><Button variant="outlined" color="success" size="small">Accept</Button> <Button variant="outlined" size="small" color="error">Reject</Button></td>
            </tr>)}
          </tbody>
  </table>
  </div>
  // </div>
  //   </div>
  )
}

export default Workerstable
