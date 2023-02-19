import { Link } from 'react-router-dom'
// import { BarChart, ChatBubbleOutline, DynamicFeed, Euro, InfoOutlined, LineStyle, MailOutline, PersonOutlined, Storefront, Timeline, TrendingUp, WorkOutline } from '@material-ui/icons'
import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className='sidebarTitle'>Dashboard</h3>          
                <ul className="sidebarList">
                    <Link to="/" className='link'>
                        <li className="sidebarListItem active">
                            {/* <LineStyle className='sidebarIcon'/> */}
                            Home
                        </li>
                    </Link>
                    <li className="sidebarListItem active">
                        {/* <Timeline className='sidebarIcon'/> */}
                        Analytics
                    </li>
                    <li className="sidebarListItem active">
                        {/* <TrendingUp className='sidebarIcon'/> */}
                        Sales
                    </li>
                </ul>          
        </div>
        <div className="sidebarMenu">
            <h3 className='sidebarTitle'>Quick Menu</h3>          
                <ul className="sidebarList">
                    <Link to="/users" className="link">
                        <li className="sidebarListItem active">
                            {/* <PersonOutlined className='sidebarIcon'/> */}
                            Users
                        </li>
                    </Link>

                    <Link to="/products" className="link">
                        <li className="sidebarListItem active">
                            {/* <Storefront className='sidebarIcon'/> */}
                            Products
                        </li>
                    </Link>

                    <li className="sidebarListItem active">
                        {/* <Euro className='sidebarIcon'/> */}
                        Sales
                    </li>
                    <li className="sidebarListItem active">
                        {/* <BarChart className='sidebarIcon'/> */}
                        Reports
                    </li>
                </ul>          
        </div>
        <div className="sidebarMenu">
            <h3 className='sidebarTitle'>Notifications</h3>          
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        {/* <MailOutline className='sidebarIcon'/> */}
                        Home
                    </li>
                    <li className="sidebarListItem active">
                        {/* <DynamicFeed className='sidebarIcon'/> */}
                        Feedback
                    </li>
                    <li className="sidebarListItem active">
                        {/* <ChatBubbleOutline className='sidebarIcon'/> */}
                        Messages
                    </li>
                </ul>          
        </div>
        <div className="sidebarMenu">
            <h3 className='sidebarTitle'>Staff</h3>          
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        {/* <WorkOutline className='sidebarIcon'/> */}
                        Manage
                    </li>
                    <li className="sidebarListItem active">
                        {/* <Timeline className='sidebarIcon'/> */}
                        Analytics
                    </li>
                    <li className="sidebarListItem active">
                        {/* <InfoOutlined className='sidebarIcon'/> */}
                        Info
                    </li>
                </ul>          
        </div>
      </div>
    </div>
  )
}
