import React,{Component,useState} from 'react'
function UChildState(props)
{
 return(
     <div>
         Name:
         <input type="text" placeholder="name"
          onChange={event=>props.handleChange(event.target.value)}>
          </input>
         </div>
 )
}
export default UChildState