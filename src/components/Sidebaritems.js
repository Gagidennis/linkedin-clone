import React from 'react'
import './sidebaritems.css'

const Sidebaritems = ({topic}) => {
  return (
    
      <div className='sidebar__recentitem'>
        <span className='sidebar__hash'>
        <li-icon aria-hidden="true" type="group" className="community-panel-interest-package__entity-icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
  <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
  <circle cx="8" cy="4" r="2"></circle>
  <circle cx="12.5" cy="5.5" r="1.5"></circle>
  <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
  <circle cx="3.5" cy="5.5" r="1.5"></circle>
</svg></li-icon>
        </span>
        <p className='sidebar__anchor'><a href={`http://${topic}.org`}>{topic}</a></p>
  
      </div>
 
  )
}

export default Sidebaritems