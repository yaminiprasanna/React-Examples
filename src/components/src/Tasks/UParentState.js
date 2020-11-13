import React,{Component,useState} from 'react'
import UChildState from './UChildState'
function UParentState(){
    const[name,setName] =useState('yamini')
    return(
                <div>
                    <h2>Hello {name}</h2>
                    <UChildState handleChange ={value=>setName(value)}/>
                    </div>
            )
        }
    

export default UParentState