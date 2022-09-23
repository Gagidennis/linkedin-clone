import { Avatar } from '@mui/material'
import React from 'react'
import './headeroptions.css'

function HeaderOptions({avatar,Icon,title}) {
  return (
    <div className='headeroption'>
        {Icon && <Icon className='headeroption__icon'/>}
        {avatar && <Avatar className='headeroption__avatar' src={avatar}/>}
  
        <h3 className='headeroption_title'>{title}</h3></div>
  )
}

export default HeaderOptions