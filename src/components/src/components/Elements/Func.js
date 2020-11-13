import React,{Component} from 'react'
import Class from './Class'
function Func(props) {
    const element = (
      <div>
        <h1>Date iss</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
   return(
     <div>
      { setInterval(Func, 1000)}
      
       </div>
   )
  }
  
  
  export default Func