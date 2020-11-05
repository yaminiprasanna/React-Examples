import React,{Component} from 'react'
class ProductInformation extends React.Component{
    constructor(props){
    super(props)
    this.handleChange=this.handleChange.bind(this)
    }
   
    handleChange=e=>{
        this.props.onQuantityChange(e.target.value);

    }
    render(){
        return(
            <div style={{border: '3px solid green'}}>
            <h1> product Information..</h1>
            <p>
                <select>
                    <option value='1'>Jeanss</option>
                    <option value='2'>sarees</option>
                    <option value='3'>T-Shirts</option>
                    <option value='4'>Kurthas</option>
                    </select>
                </p>
                <p><label> Enter Quantity:<input type="text" value={this.props.quantity}
                 onChange={this.handleChange}/></label></p>
            </div>
        )


    }
}
export default ProductInformation