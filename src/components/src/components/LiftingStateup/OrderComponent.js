import React,{Component} from 'react'
import ProductInformation from './ProductInformation'
import Address from './Address'
import Summary from './Summary'
class OrderComponent extends React.Component{
    constructor(props){
    super(props)
    this.state={
        address:'',
        quantity:''
    }
    }
    orderInfoChanged=value=>{
        this.setState({quantity:value})
    }
    addressInfoChanged=value=>{
        this.setState({address:value})
    }
   
    render(){
        return(
            <div>Product order screen..
                <ProductInformation quantity={this.state.quantity}
                   onQuantityChange={this.orderInfoChanged}/>
                    <Address quantity={this.state.quantity}
                   onAddressChange={this.addressInfoChanged}/>
                    <Summary quantity={this.state.quantity} address={this.state.address}
                   onQuantityChange={this.orderInfoChanged}/>

            </div>
        )
       
    }
}



export default OrderComponent