import React,{Component} from 'react'
import DefaultParentProps from './DefaultParentProps'
class DefaultChildProps extends React.Component{
    constructor(props){
        super(props)
    }
 render(){
     return(
         <div>
             <h1>age is {this.props.age || '15'}</h1>
             </div>
     )
 }
}
export default DefaultChildProps