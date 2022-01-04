import React from "react";
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
function Sidebar() {

    return(
        <div className="sidebar">
        <TwitterIcon className="sidebar__twitterIcon"/>
        {/* Sidebar Option */}
        <SidebarOption active Icon={HomeIcon}/>
        <SidebarOption Icon ={TagIcon}/>
        <SidebarOption Icon ={NotificationsOutlinedIcon}/>
        <SidebarOption Icon={EmailOutlinedIcon}/>
        <SidebarOption Icon={PermIdentityOutlinedIcon}/>
        <SidebarOption Icon={MoreHorizIcon}/>
        <SidebarOption Icon={AddCircleOutlineRoundedIcon}/>
        <AccountBoxTwoToneIcon className="sidebar_profileIcon"/>
        </div>
    );
  
}
export default Sidebar;