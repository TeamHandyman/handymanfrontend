import "./sales.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Saleswidget from "../../components/saleswidget/Saleswidget"
import Featured from "../../components/featured/Featured"
import Saleschart from "../../components/saleschart/Saleschart"
import Commisionchart from "../../components/commisionchart/Commisionchart"

const Sales = () => {

  return (
    <div className="sales">
    <div className="position">
      <Sidebar />
    </div>
    {/* <Sidebar/> */}
        <div className="salesContainer">
        <Navbar />
        <h2 style={{color: "#1c1c1c", marginLeft:"30px", marginBottom:"10px"}} className="title">Sales Details</h2>

        <div className="saleswidgets">
        <Saleswidget type="workers"/>
        <Saleswidget type="clients"/>
        <Saleswidget type="sales"/>
        {/* <Saleswidget type="tickets"/> */}
        </div>
        <div className="charts">
          <Featured />
          <Saleschart />
       </div>
      
       <div className="commisiontable">
       <h1 className="title">Commision Summary</h1>
           <Commisionchart />  
       </div>
    </div>
    
    </div>
  )
}

export default Sales
