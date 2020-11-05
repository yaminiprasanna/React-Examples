import React from 'react'
import UnmountChild from './UnmountChild'
class ComponentWillUnmount extends React.Component{
    constructor(props){
        super();
        console.log('constructor')
        this.state={
            show:false
        }

    }
  

    render(){
        console.log('render')
        return(
            <div>
                <h2>component will unmount</h2>
                {this.state.show?<UnmountChild/>:null}
                <button onClick={()=>{this.setState({show:!this.state.show})}}>Togglebutton</button>
            </div>
        )
    }
}
export default ComponentWillUnmount