import React,{Component} from 'react'
import Home from './Home'
//updating this state from derived props
class GetDerStateFromProps extends React.Component{
    constructor(props){
        super(props);
        this.state={
           currval:0
           
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log('props',props,state);
        return{
            currval:props.data*10
        }
       

    }
    render(){
       console.log(this.props,this.state);
        return(
            <div>
          <h2>Current value:{this.state.currval}</h2>
             </div>
        )
    }
}
export default GetDerStateFromProps