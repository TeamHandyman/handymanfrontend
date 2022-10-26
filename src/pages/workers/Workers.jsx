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
        <Workerstabs />
    </div>
    
    </div>
  )
}

export default Workers
