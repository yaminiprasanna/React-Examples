import React,{Component} from 'react'
import ChildFunc from './ChildFunc'
class ParentFunc extends Component{
    constructor(props){
        super(props);
        this.state={
            counter:0
        }
      this.updateCounter=this.updateCounter.bind(this);
    }
    updateCounter=()=>{
        this.setState({
            counter:this.state.counter+1
        })
        
    }
    render(){
        const{counter}=this.state;
        return(
            <div>
            <span>{this.state.counter}</span>
            <ChildFunc counter1={counter} counterVar={this.updateCounter}/>
            </div>
        );
    }
} 
export default ParentFunc