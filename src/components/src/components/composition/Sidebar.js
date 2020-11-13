import React,{Component} from 'react'
import Calculator from './Calculator'
function Sidebar(props){
    return(
        <div className='sidebar'>{props.childern}</div>
    )
}
export default Sidebar