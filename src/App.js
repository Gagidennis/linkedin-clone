import React from 'react';
import { Header } from './components/Header';
import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';



function App() {
  
  return (
    <div className="App">
    
     {/*header*/}
     <Header/>
     <div className='app__body'>
      <Sidebar/>
      <Feed/>

      
      
     </div>
     
        

     {/*app body*/}
        {/*sidebar*/}
        {/*feed*/}
        {/*widgets */}
    </div>
  );
}

export default App;
