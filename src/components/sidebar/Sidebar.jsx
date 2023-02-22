import { Link } from 'react-router-dom'
// import { BarChart, ChatBubbleOutline, DynamicFeed, Euro, InfoOutlined, LineStyle, MailOutline, PersonOutlined, Storefront, Timeline, TrendingUp, WorkOutline } from '@material-ui/icons'
import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className='sidebarTitle'>Strolls</h3>          
                <ul className="sidebarList">
                    <Link to="/" className='link'>
                        <li className="sidebarListItem active">
                            {/* <LineStyle className='sidebarIcon'/> */}
                            Create
                        </li>
                    </Link>
                    <li className="sidebarListItem active">
                        {/* <Timeline className='sidebarIcon'/> */}
                        My list
                    </li>
                    <li className="sidebarListItem active">
                        {/* <TrendingUp className='sidebarIcon'/> */}
                        Favorites
                    </li>
                </ul>          
        </div>
        <div className="sidebarMenu">
            <h3 className='sidebarTitle'>Quick Menu</h3>          
                <ul className="sidebarList">
                    <Link to="/users" className="link">
                        <li className="sidebarListItem active">
                            {/* <PersonOutlined className='sidebarIcon'/> */}
                            Home
                        </li>
                    </Link>

                    <Link to="/products" className="link">
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
                    <li className="sidebarListItem active">
                        {/* <MailOutline className='sidebarIcon'/> */}
                        Profile image
                    </li>
                    <li className="sidebarListItem active">
                        {/* <DynamicFeed className='sidebarIcon'/> */}
                        logout
                    </li>

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
