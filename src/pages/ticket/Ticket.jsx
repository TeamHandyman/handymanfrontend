import "./ticket.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Ticketswidget from "../../components/ticketswidget/Ticketswidget"
import Ticketstable from "../../components/ticketstable/Ticketstable"
// import Saleschart from "../../components/saleschart/Saleschart"


const Ticket = () => {

  return (
    <div className="tickets">
    <div className="position">
      <Sidebar />
    </div>
    {/* <Sidebar/> */}
        <div className="ticketsContainer">
        <Navbar />
        <div className="ticketsWidget">
        <Ticketswidget type="workers"/>
        <Ticketswidget type="clients"/>
        <Ticketswidget type="sales"/>
        {/* <Saleswidget type="tickets"/> */}
        </div>
        
      
       <div className="ticketstable">
       <h1 className="title">All Support Tickets</h1>
           <Ticketstable />  
       </div>
    </div>
    
    </div>
  )
}

export default Ticket
