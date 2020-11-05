import React,{Component} from 'react'
import ParentFunc from './ParentFunc'
class  ChildFunc extends React.Component{
    constructor(props){
    super(props);
    console.log(props)
    }
    render(){
    return(
        <div>
            <h2>counter tick tick{this.props.counter1}</h2>
            <button onClick={this.props.counterVar}>updatecounter</button>
        </div>
    )
}

}
export default ChildFunc