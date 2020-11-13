import React,{Component} from 'react'
import  Element1 from './Element1'

function Element(props){
    const name1='yamini';
    const version=''
    const user = {
        firstName: 'yamini',
        lastName: 'Prasanna'
      }
      
      function formatName(user) {
        return user.firstName + ' ' + user.lastName;
      }
      function Tick(){
        const date = (
            <div>
              <h1>Hello, world!</h1>
              <h2>It is {new Date().toLocaleTimeString()}.</h2>
              
            </div>
          );
      }
// using React.createElement
      const element = React.createElement(
        'h1',
        {className: 'greeting'},
        'Hello, world!'
      );
      
    return(
        <div>
          <Element1 flower="rose"/>
          {/* <Element1 flower="lilly"/>
          <Element1 flower="Jasmine"/> */}
         <h1> Hello world!! Welcome{name1} and Yor favourite flower is {props.flower}</h1>
         <h2>name is {user.firstName } and { user.lastName}</h2>
         <h3>{formatName(user)} {element}</h3>
         <h4>{setInterval(Tick, 1000)}</h4>
         <h1>{props.version|| 15}</h1>
         
         
        </div>
    );    
}

export default Element

