import React from 'react'
import './header.css'
import image from './logo.svg'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export  const Header = () => {
  return (
    <div className='header'>
    
    <div className='header__left'>
        <img  src={image} alt={image.xmlns}/>
        <div className='header__search'>
       <SearchIcon/> 
       <input type='text' />
        </div>
    </div>
    <div className='header__right'>
        <HeaderOptions Icon={HomeIcon} title='Home'/>
        <HeaderOptions  Icon={SupervisorAccountIcon } title='My Network'/>
        <HeaderOptions  Icon={BusinessCenterIcon } title='Jobs'/>
        <HeaderOptions  Icon={MarkUnreadChatAltIcon } title='Messaging'/>
        <HeaderOptions  Icon={NotificationsIcon } title='notifications'/>
        <span style={{display:'flex'}}>
        <HeaderOptions  avatar='https://media-exp1.licdn.com/dms/image/C4D03AQEBdGbI-Snl3w/profile-displayphoto-shrink_100_100/0/1659416052537?e=1669248000&amp;v=beta&amp;t=BfP5ZFUJlstB74xysvLyftPLEdby7kWQxGoeXSerzxY' title='Me'/>
       <span style={{paddingTop:'55px',marginLeft:'0'}}><HeaderOptions   Icon={ArrowDropDownIcon} /></span> 

        </span>
        
    </div>
    </div>
  )
}
