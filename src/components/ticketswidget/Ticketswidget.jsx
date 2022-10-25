import "./ticketwidget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EngineeringIcon from '@mui/icons-material/Engineering';
import GroupIcon from '@mui/icons-material/Group';
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import { useState, useEffect } from "react";
import axios from "axios";


const Ticketwidget = ({type}) => {
  let data;
  const [tickData, setTicData] = useState([]);
  const [tickDataOpened, setTicDataOpened] = useState([]);
  const [tickDataClosed, setTicDataClosed] = useState([]);

  const TickLoad = () => {
    useEffect (()=> {
      axios.get('http://localhost:1337/api/tickets/getTicketsOpen').then((response)=>{setTicData(response.data)})
    }, [])
  }

  const TickLoadClosed = () => {
    useEffect (()=> {
      axios.get('http://localhost:1337/api/tickets/getTicketsClosed').then((response)=>{setTicDataClosed(response.data)})
    }, [])
  }

  const TickLoadOpened = () => {
    useEffect (()=> {
      axios.get('http://localhost:1337/api/tickets/getTicketsOpened').then((response)=>{setTicDataOpened(response.data)})
    }, [])
  }

  let count;
  //temp
  const amount = 100
  const diff = 20 

  switch(type){
    case "workers":
      TickLoad();
      count = tickData.length;
      data={
        title:"NEW TICKETS",
        isMoney: false,
        icon: (<EngineeringIcon className="icon"/>)
      };
      break;
    case "clients":
      TickLoadOpened();
      count = tickDataOpened.length;
      data={
        title:"OPENED TICKETS",
        isMoney: false,
        icon: (<GroupIcon className="icon"/>)
      };
      break;
    case "sales":
      TickLoadClosed();
      count = tickDataClosed.length;
      data={
        title:"CLOSED TICKETS",
        isMoney: false,
        icon: (<StackedLineChartOutlinedIcon className="icon"/>)
      };
      break;
    // case "tickets":
    //   data={
    //     title:"TICKETS",
    //     isMoney: false,
    //     link:"View All Tickets",
    //     icon: (<LocalActivityOutlinedIcon className="icon"/>)
    //    };
    //   break;
      
      default:
        break;
  }



  return (
    <div className="ticketWidget">
      <div className="left">
          <span className="title ">{data.title}</span>
          <span className="counter">{data.isMoney && "$"} {count} </span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Ticketwidget
