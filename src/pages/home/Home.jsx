import React from "react"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"

import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
        <Widget type="workers"/>
        <Widget type="clients"/>
        <Widget type="sales"/>
        <Widget type="tickets"/>
        </div>
        <div className="charts">
          <Featured />
          <Chart />
       </div>
      </div>
    </div>
  )
}

export default Home