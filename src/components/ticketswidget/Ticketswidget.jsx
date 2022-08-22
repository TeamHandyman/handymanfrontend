import "./ticketwidget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EngineeringIcon from '@mui/icons-material/Engineering';
import GroupIcon from '@mui/icons-material/Group';
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';

const Ticketwidget = ({type}) => {
  let data;

  //temp
  const amount = 100
  const diff = 20 

  switch(type){
    case "workers":
      data={
        title:"NEW TICKETS",
        isMoney: true,
        icon: (<EngineeringIcon className="icon"/>)
      };
      break;
    case "clients":
      data={
        title:"OPENED TICKETS",
        isMoney: false,
        icon: (<GroupIcon className="icon"/>)
      };
      break;
    case "sales":
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
          <span className="counter">{data.isMoney && "$"} {amount} </span>
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
