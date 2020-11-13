import React,{Component} from 'react'
import DefaultChildProps from './DefaultChildProps'
class DefaultParentProps extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
         let age;
        return(
            <div>
                <DefaultChildProps age = ''/>
            </div>
        )
    }
}
export default DefaultParentProps