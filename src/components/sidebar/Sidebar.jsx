import { useContext } from "react";
import { Link } from 'react-router-dom'
import React from 'react'
import "./sidebar.css"
import { AuthContext } from "../../context/auth.context";
export default function Sidebar() {
    const { isLoggedIn, logOutUser } = useContext(AuthContext);
    console.log(isLoggedIn);
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className='sidebarTitle'>Strolls</h3>          
                <ul className="sidebarList">
                    <Link to="/users/:id/create" className='link'>
                        <li className="sidebarListItem active">
                            
                            Create
                        </li>
                    </Link>
                </ul>          
        </div>
        <div className="sidebarMenu">
            <h3 className='sidebarTitle'>Quick Menu</h3>          
                <ul className="sidebarList">
                    <Link to="/" className="link">
                        <li className="sidebarListItem active">
                            
                            Home
                        </li>
                    </Link>
                    <Link to="/strolls" className="link">
                        <li className="sidebarListItem active">
                            
                            List Page
                        </li>
                    </Link>
                </ul>          
        </div>
        <div className="sidebarMenu">
            <h3 className='sidebarTitle'>Account</h3>          
                <ul className="sidebarList">
                  
                    <Link to="/login" className="link">
                        <li onClick={logOutUser} className="sidebarListItem active">
                            
                            logout
                        </li>
                    </Link>
 
                </ul>          
        </div>
        <div className="sidebarMenu">
            <h3 className='sidebarTitle'>Help</h3>          
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                       
                        FAQS
                    </li>
                    <li className="sidebarListItem active">
                        
                        Contact
                    </li>
                </ul>          
        </div>
      </div>
    </div>
  )
}
