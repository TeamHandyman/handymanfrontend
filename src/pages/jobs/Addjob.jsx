import React from 'react'
import './addjob.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
// import Workerstable from '../../components/workerstable/Workerstable'
import Addjobfom from '../../components/addjobform/Addjobfom'

const Addjob = () => {
  return (
    <div className='addjobs'>
         <Sidebar />
            <div className="addjobsContainer">
            <Navbar />
            {/* <Workerstable /> */}
            <Addjobfom style={{marginBottom: "20px"}} />
    </div>
      
    </div>
  )
}

export default Addjob
