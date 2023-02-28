import React from 'react'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Sidebar from '../../components/sidebar/Sidebar'
import StrollCreated from '../../components/StrollCreated/StrollCreated'
import UserStroll from '../../components/UserStroll/UserStroll'
import "../Dashboard/dashboard.css"

const Dashboard = () => {
  return (
    <div>      
        <div className="containerDashboard">
            <Sidebar/>
            <div className='others'>
                <FeaturedInfo/>
                <div>
                  <h2 className="featuredTitle"  style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px', WebkitBoxShadow: '0px 0px 15px 0px rgba(255,255,255,0.07)',
                    boxShadow: '0px 0px 15px 0px rgba(2, 1, 1, 0.07)',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '5px' }} ><i
                    className= 'uil uil-heart-sign cursor-pointer'    
                  ></i></h2>
                </div>
                <UserStroll/>
                <h1 className="featuredTitle" style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px', WebkitBoxShadow: '0px 0px 15px 0px rgba(255,255,255,0.07)',
                    boxShadow: '0px 0px 15px 0px rgba(2, 1, 1, 0.07)',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '5px' }} > Created <i
                        
                  ></i></h1>
                <StrollCreated/>
            </div>
            
        </div>
      
    </div>
  )
}

export default Dashboard
