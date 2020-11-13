import React,{Component} from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
class Calculator extends React.Component{
    render(){
        return(
            <div>
                <h1>Composition vs Inheritance</h1>
                {/* <Sidebar data={'sidebar'}/ >
                <h2>sidebar data</h2>
                <h2>sidebar data</h2>
                <h2>sidebar data</h2>
              
                
                
                </div> */}
                <Content>
                    <Sidebar />
                    
                    </Content>
                    </div>
        )
    }
}
export default Calculator