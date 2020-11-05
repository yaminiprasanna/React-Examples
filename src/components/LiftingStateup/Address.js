import React,{Component} from 'react'
class Address extends React.Component{
    constructor(props){
    super(props)
    this.handleChange=this.handleChange.bind(this)
    }
    handleChange=e=>{
        this.props.onAddressChange(e.target.value)
    }
    render(){
        return(
            <div style={{border: '3px solid green'}}>
            <h1> Address Information..</h1>
           
                <p><label> Enter Address:<textarea type="text" value={this.props.address}
                 onChange={this.handleChange}/></label></p>
            </div>
        )

    }
}
export default Address