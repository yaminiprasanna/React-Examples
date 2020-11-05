import React,{Component} from 'react'
import Element from './Element'
import Func from './Func'
class Class extends React.Component {
    constructor(props){
        super(props)
        this.state={
            name1:'Prasanna'
        }
    }
    render() {
      return (
      <div>
      <Func flower="Rose"/>
      <h2>name {this.props.flower} is {this.state.name1}</h2>
      </div>
      )
    }
  }
export default Class  