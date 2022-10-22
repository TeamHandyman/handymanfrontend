import "./workerstable.scss"
//import { DataGrid } from '@mui/x-data-grid';
//import { userRows, userColumns } from "../../workersTableSource";
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import { Link, useNavigate } from 'react-router-dom';
>>>>>>> 1bd987b0db682ff8da14d6b93ef17a07307fec1a
import {useEffect, useState} from 'react'
import axios from "axios";
import './style.css'
import Button from '@mui/material/Button';
<<<<<<< HEAD
//import Stack from '@mui/material/Stack';
=======
import Stack from '@mui/material/Stack';
>>>>>>> 1bd987b0db682ff8da14d6b93ef17a07307fec1a

  
const Workerstable = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:1337/api/worker/customer').then((response)=>{setData(response.data)})
  }, [])
  //console.log(data.fName)
//   const navigate = useNavigate();
//   const viewPro = () => { axios.put('http://localhost:1337/api/worker')}

  
  
  return (

    <div className="workerstable">
      <table className="table">
          <thead className="th">
              <th>First Name</th>
              <th>Last Name</th>
              <th>District</th>
              
              <th>Profile</th>
              
          </thead>
          <tbody className="tb">
            {data.map((x) => <tr style={{ 'marginLeft': "5rem" }} className="tr" key={x.id}>
              <td className="td">{x.fName}</td>
              <td className="td">{x.lName}</td>
              <td className="td">{x.district}</td>
              
              <Link to="/workers/1" className="linkStlyes"> 
                   <td className="td-A"><Button variant="outlined" color="secondary" size="small">View</Button></td>
              </Link>
              
            </tr>)}
          </tbody>
  </table>
        
    </div>
  )
}

export default Workerstable
