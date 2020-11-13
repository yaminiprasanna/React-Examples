import React from 'react'
class UnmountChild extends React.Component{
    constructor(props){
        super();
        console.log('constructor')
        

    }
   componentWillUnmount(){
       console.log('Component is hidden now')
   }

    render(){
        console.log('render')
        return(
            <div>
                <h2>child component</h2>
            </div>
        )
    }
}
export default UnmountChild