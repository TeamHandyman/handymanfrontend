import './jobs.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Workerstable from "../../components/workerstable/Workerstable"
import Addnewjob from "../../components/addnewjob/Addnewjob"
import { Link } from 'react-router-dom';


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

            <Addnewjob /> 

            <Workerstable />
            
        </div>
        
        </div>
      )
}

export default Jobs
