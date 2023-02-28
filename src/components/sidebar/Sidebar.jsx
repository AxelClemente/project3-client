import { useContext } from "react";
import { Link } from 'react-router-dom'
// import { BarChart, ChatBubbleOutline, DynamicFeed, Euro, InfoOutlined, LineStyle, MailOutline, PersonOutlined, Storefront, Timeline, TrendingUp, WorkOutline } from '@material-ui/icons'
import React from 'react'
import "./sidebar.css"
import { AuthContext } from "../../context/auth.context";

export default function Sidebar() {

    const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className='sidebarTitle'>Strolls</h3>          
                <ul className="sidebarList">
                    <Link to="/users/:id/create" className='link'>
                        <li className="sidebarListItem active">
                            {/* <LineStyle className='sidebarIcon'/> */}
                            Create
                        </li>
                    </Link>
                    {/* <li className="sidebarListItem active">
                        
                        My list
                    </li>
                    <li className="sidebarListItem active">
                        
                        Favorites
                    </li> */}
                </ul>          
        </div>
        <div className="sidebarMenu">
            <h3 className='sidebarTitle'>Quick Menu</h3>          
                <ul className="sidebarList">
                    <Link to="/" className="link">
                        <li className="sidebarListItem active">
                            {/* <PersonOutlined className='sidebarIcon'/> */}
                            Home
                        </li>
                    </Link>

                    <Link to="/strolls" className="link">
                        <li className="sidebarListItem active">
                            {/* <Storefront className='sidebarIcon'/> */}
                            List Page
                        </li>
                    </Link>

                </ul>          
        </div>
        <div className="sidebarMenu">
            <h3 className='sidebarTitle'>Account</h3>          
                <ul className="sidebarList">
                    {/* <li className="sidebarListItem active">
                        <MailOutline className='sidebarIcon'/>
                        Profile image
                    </li> */}
                    <Link to="/login" className="link">
                        <li onClick={logOutUser} className="sidebarListItem active">
                            {/* <DynamicFeed className='sidebarIcon'/> */}
                            logout
                        </li>
                    </Link>
 

                </ul>          
        </div>
        <div className="sidebarMenu">
            <h3 className='sidebarTitle'>Help</h3>          
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        {/* <WorkOutline className='sidebarIcon'/> */}
                        FAQS
                    </li>
                    <li className="sidebarListItem active">
                        {/* <Timeline className='sidebarIcon'/> */}
                        Contact
                    </li>

                </ul>          
        </div>
      </div>
    </div>
  )
}
