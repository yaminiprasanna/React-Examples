import React,{Component} from 'react'
import Element from './Element'
class Element1 extends React.Component {
 constructor(props){
  super()
  this.state={
    name:'sainadh',
    date:new Date(),
    count:0,
    flower:'lilly'
  }
  this.handleClick=this.handleClick.bind(this)

 }
 
incrementCount=()=>{
  this.setState(prevState=>{
    return{
    count:prevState.count+1}
  })
}
handleClick=e=>{
  e.preventDefault();
  console.log("Heyy Your Awsome");
  this.setState({
    name:'Hey ur Awsome'
  })

}
  render() {
    const {count}=this.state
    const{flower}=this.state
    return(
      <div>
       <h1>Hello {this.state.name}</h1>
       <h2>heyyy{this.props.flower}</h2>
       <h2>Time is {this.state.date.toLocaleTimeString()}.</h2>
       <label for='name'>Name:</label>
       <input type="text" name='' onChange={this.handleChange}/>
       <button onMouseOver={this.incrementCount}>count{count}</button>
       <button onClick={this.handleClick}>click</button>
       </div>
    );

  }
}
export default Element1