import React from 'react'
import ComponentWillUnmount from './ComponentWillUnmount'
class ComponentDidMount extends React.Component{
    constructor(props){
        super();
        console.log('constructor')
        this.state={
            data:false
        }

    }
    componentDidMount(){
        console.log('component did mount')
        this.setState({
            data:true
        })
    }

    render(){
        console.log('render')
        return(
            <div>
                <h2>component did mount</h2>
                <ComponentWillUnmount/>
            </div>
        )
    }
}
export default ComponentDidMount