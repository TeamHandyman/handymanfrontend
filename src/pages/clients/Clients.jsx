import "./clients.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Workerstable from "../../components/workerstable/clientTable"

const Clients = () => {

  return (
    <div className="clients">
      <Sidebar />
        <div style={{color: "#1c1c1c", marginLeft:"25px"}} className="clientsContainer">
        
        <Navbar />
        <h2 style={{color: "#1c1c1c", marginBottom: "25px"}} className="title">Client Details</h2>
        <Workerstable />
    </div>
    
    </div>
  )
}

export default Clients
