import { Avatar } from '@mui/material'
import React, { useState,useEffect }  from 'react'
import './sidebar.css'
import img from './background.jfif'
import Sidebaritems from './Sidebaritems'
import AddIcon from '@mui/icons-material/Add';

function Sidebar() {
 const[show,setShow]=useState(false)


  const handleShow = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 500 ) {
        if (!show) {
          console.log("set to true");
          setShow(true);
        }
      }
      if (window.scrollY  < 500 ) {
        console.log("set to false");
        setShow(false);
      }
    
    }}
 
    useEffect(() => {
      
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", handleShow);
      }
      return () => {
        if (typeof window !== "undefined") {
          window.removeEventListener("scroll", handleShow);
        }
      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
   
      
    
 
  return (
    <div>
        <div className="sidebar">
        <div className="sidebar__top">
          <img src={img} alt=''/>
          <Avatar className="sidebar__avatar"/>
          <h2>Andrew Dennis</h2>
          <h4>gagidennis@gmail.com</h4>

</div>

<div className="sidebar__stats">
  <div className='sidebar__stat'>
   <p>who viewed you</p>
   <p className='sidebar__statsnumber'>600</p>
  </div>
  <div className='sidebar__stat'>
  <p>views on post</p>
  <p className='sidebar__statsnumber'>600</p>
  </div>

        </div>
        <div className={show ?'sidebar__sticky' : "sidebar__normal"} > 
        <div className='sidebar__button'>
          <p>Recent</p>
          <Sidebaritems topic='reactjs' />
          <Sidebaritems topic='redux.js' />
          <Sidebaritems topic='redux-thunk' />
          <Sidebaritems topic='typescipt' />
          <Sidebaritems topic='next.js' />
          <Sidebaritems topic='nodejs' />
          <p style={{color:'#498fe9'}}>Groups</p>
          <Sidebaritems topic='reactjs' />
          <Sidebaritems topic='redux.js' />
          <Sidebaritems topic='redux-thunk' />
          <Sidebaritems topic='typescipt' />
          <Sidebaritems topic='nextjs' />
          <Sidebaritems topic='nodejs' />
          <div className='sidebar__events'>
          <p>Events</p> <span><AddIcon/>
            </span>
        </div>
        <span className='sidebar__hashtag'>Followed Hashtags</span>
      
        

        </div>
        <div className='sidebar__discover'> <p >Discover More</p></div> 
       
        </div> 
        
        </div>
    </div>
  )
}

export default Sidebar