import './jobs.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Workerstable from "../../components/workerstable/Workerstable"
import Addnewjob from "../../components/addnewjob/Addnewjob"
import { Link } from 'react-router-dom';
import Jobstab from '../../components/jobtable/jobtable'


const Jobs = () => {
    return (
        <div className="jobs">
          <Sidebar />
            <div className="jobsContainer">
            <Navbar />

            {/* <Link to="addjob">
            <div className="hover-effect">
                <button className='btn'></button>
            </div>
            </Link>  */}
        <h2 style={{color: "#1c1c1c", marginLeft:"25px", marginBottom:"20px"}} className="title">Job Details</h2>


            <Addnewjob /> <br /><br />



            <Jobstab />
            
        </div>
        
        </div>
      )
}

export default Jobs
