import React from 'react'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Sidebar from '../../components/sidebar/Sidebar'
import "../Dashboard/dashboard.css"

const Dashboard = () => {
  return (
    <div>      
        <div className="containerDashboard">
            <Sidebar/>
            <div className='others'>
                <FeaturedInfo/>
            </div>
            
        </div>
      
    </div>
  )
}

export default Dashboard
