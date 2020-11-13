import React from 'react';
import GetDerStateFromProps from './GetDerStateFromProps'
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:0
        }
    }
    
    render(){
        const{data}=this.state
        return(
            <div>
                <h2>getDerivedState from props{this.state.data}</h2>
                <GetDerStateFromProps data={this.state.data}/>
                <button onClick={()=>{this.setState({data:this.state.data+1})}}>Data</button>
                </div>
        )
    }
}
export default Home