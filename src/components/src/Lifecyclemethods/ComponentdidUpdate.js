import React from 'react'
import ComponentWillUnmount from './ComponentWillUnmount'
class ComponentDidUpdate extends React.Component{
    constructor(props){
        super();
        console.log('constructor')
        this.state={
            counter:0
        }

    }
    componentDidUpdate(prevProps,prevState,snapShot){
        console.log('update called',prevProps,prevState);
        if(prevProps.counter==this.state.counter){
            console.log('match')
        }
    }
    

    render(){
        console.log('render')
        return(
            <div>
                <h2>component did Update</h2>
                <button onClick={()=>{this.setState({counter:this.state.counter+1})}}>
                Counter{this.state.counter}</button>
                
            </div>
        )
    }
}
export default ComponentDidUpdate