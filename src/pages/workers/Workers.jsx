import "./workers.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Workerstabs from "../../components/workerstabs/Workerstabs"
import Workerstable from "../../components/workerstable/Workerstable"

const Workers = () => {

  return (
    <div className="workers">
      <Sidebar />
        <div className="workersContainer">
        <Navbar />
        {/* <Workerstable /> */}
        <h2 style={{color: "#1c1c1c", marginLeft:"35px"}} className="title">Workers Details</h2>
        <Workerstabs />
    </div>
    
    </div>
  )
}

export default Workers
