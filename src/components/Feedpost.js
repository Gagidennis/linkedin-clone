import React from 'react'
import './feedposts.css'

function Feedpost({svg,posttitle}) {
  return (
   
          <div className='feed__post'>
       <li-icon aria-hidden="true" type="image" className="artdeco-button__icon">{svg}</li-icon>
        <p className='feed__posttitle'>{posttitle}</p>
       </div>
    
  )
}

export default Feedpost