
import React,{useEffect, useState} from 'react'
import { db } from '../firebase'
import './feed.css'
import Feedpost from './Feedpost'
import Post from './Post'
import firebase from 'firebase/compat/app'
import { uniqueNamesGenerator, adjectives, colors, animals,names,countries } from 'unique-names-generator'





function Feed() {
    

const shortName = uniqueNamesGenerator({
  dictionaries: [names],// colors can be omitted here as not used
  length: 1
}); 
const Descri = uniqueNamesGenerator({
    dictionaries: [uniqueNamesGenerator, adjectives, colors, animals,names,countries],// colors can be omitted here as not used
    length: 5
  }); 
  var images = ["8olCb1Qb", "usJWgL7b", "kxsLXb8b", "XQbcjvUb", "j3CVSSMb", "BQNvBVib", "DZq0ORlb", "t73Tvlqb", "Y8iFltdb", "u3sBUMjb"];
var randomPick = images[Math.random() * images.length | 0];
var url = "http://i.imgur.com/" + randomPick + ".jpg";




    const[input,setInput]=useState('')
    const [posts,setPosts]=useState([])
    const sendpost=(e)=>{
        e.preventDefault()

        
        
        db.collection('posts').add({
            name:shortName,
            description:Descri,
            message:input,
            photourl:url,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        })
     setInput('');
    }
  
    useEffect(()=>{
        db.collection("posts").orderBy('timestamp','desc').onSnapshot( snapshot=>(
            setPosts(
                snapshot.docs.map(doc=>(
    
                {
                    id:doc.id,
                    data:doc.data(),
                }
            ))
         )))
    },[]

    )
  return (
    
    <div className='feed'>
         <div className='feed__inputcontainer'>
         <div className='feed__input'>
       <img className='feed__image' src='https://media-exp1.licdn.com/dms/image/C4D03AQEBdGbI-Snl3w/profile-displayphoto-shrink_100_100/0/1659416052537?e=1669248000&amp;v=beta&amp;t=BfP5ZFUJlstB74xysvLyftPLEdby7kWQxGoeXSerzxY' alt='img' />
       <form className='feed__form'>
        <input className='feed__inputs' value={input} onChange={e=>setInput(e.target.value)} placeholder='Start a post' type="text"/>
        <button type= 'submit' onClick={sendpost}>send</button> 
        
       </form>
     
       </div>
       <div className='feed__posts'>
     <Feedpost svg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="blue" class="mercado-match" width="24" height="24" focusable="false">
  <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
</svg>} posttitle='Photo'/>
<Feedpost svg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="green" class="mercado-match" width="24" height="24" focusable="false">
  <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
</svg>} posttitle='video' />
<Feedpost svg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="purple" class="mercado-match" width="24" height="24" focusable="false">
  <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
</svg>} posttitle='Jobs' />
<Feedpost svg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="red" class="mercado-match" width="24" height="24" focusable="false">
  <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
</svg>} posttitle='Write article' /></div>
       </div>
       {posts.map(
        ({id,data:{name,description,message,photourl}})=>(
            <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photourl={photourl}
            />
        
       ))}
       
     
    </div>
  )
}

export default Feed