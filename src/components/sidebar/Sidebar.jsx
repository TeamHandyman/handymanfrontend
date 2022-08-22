import './sidebar.scss'
import GridViewIcon from '@mui/icons-material/GridView';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import weblogo from '../../images/handyman-logo.png'; 
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className="logo"><img src={weblogo} alt="logo"/></span>
      </div>
      {/* <hr /> */}
      <div className='center'>
        <ul><br /> <br />
            {/* <p className="title">Main</p> */}
            <li>
            <Link to="/home" className="linkStlyes">
            <div className="hover-effect">
                <GridViewIcon className='icon'/>
                <span className='menu-links' >Dashboard</span>
            </div>
            </Link> 

            </li>
            <li>
          
            <Link to="/workers" className="linkStlyes">
            <div className="hover-effect">
                <PeopleAltIcon className='icon' />
                <span className='menu-links'>Workers</span>
            </div>
            </Link>
            </li>
            <li>
            <Link to="/clients" className="linkStlyes">
            <div className="hover-effect">
                <PeopleAltIcon className='icon' />
                <span className='menu-links'>Clients</span>
            </div>
            </Link>
            </li>

            <Link to="/ticket" className="linkStlyes">
            <li>
                <LocalActivityIcon className='icon'/>
                <span className='menu-links'> Tickets</span>
            </li>
            </Link>
            
            <Link to="/sales" className="linkStlyes">
            <li>
                <SignalCellularAltIcon className='icon'/>
                <span className='menu-links'>Sales</span>
            </li>
            </Link>
           
            {/* <p className="title">Updates</p> */}
            {/* <li>
                <NotificationsNoneIcon className='icon'/>
                <span className='menu-links'>Notifications</span>
            </li>
            <li>
                <CalendarMonthIcon className='icon'/>
                <span className='menu-links'>Calendar</span>
            </li> */}
            {/* <li>
                <ExitToAppIcon className='icon'/>
                <span className='menu-links'>Logout</span>
            </li> */}
        </ul>
      </div>
      <div className='bottom'></div>
    </div>
  )
}

export default Sidebar
