import "./clients.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Workerstable from "../../components/workerstable/clientTable"

const Clients = () => {

  return (
    <div className="clients">
      <Sidebar />
        <div className="clientsContainer">
        <Navbar />
        <Workerstable />
    </div>
    
    </div>
  )
}

export default Clients
