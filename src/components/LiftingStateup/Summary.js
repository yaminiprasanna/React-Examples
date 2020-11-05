import React,{Component} from 'react'
class Summary extends React.Component{
    constructor(props){
    super(props)
    this.handleChange=this.handleChange.bind(this)
    }
    handleChange=e=>{
        this.props.onQuantityChange(e.target.value)
    }
    render(){
        return(
            <div style={{border: '3px solid green'}}>
            <h1> Summary Information..</h1>
            <p>
               <label>product name:<b>product-1</b></label> 
                </p>
                <p><label> Enter Quantity:<input type="text" value={this.props.quantity}
                 onChange={this.handleChange}/></label></p>
            
            <p> <label>Address:<b>{this.props.address}</b></label></p>
            <button> PlaceOrder</button>
            </div>
        )

    }
}
export default Summary