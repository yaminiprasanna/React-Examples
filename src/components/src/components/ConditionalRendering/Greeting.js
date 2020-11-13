import React,{Component} from 'react'
import User from './User';
import Guest from './Guest'
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <User />;
    }
    return <Guest />;
  }
 
  export default Greeting