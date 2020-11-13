import React,{Component} from 'react'
import Element from './Element'
class Lifecycle extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        3000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    
  
    render() {
      return (
        <div>
          <h1>Time Interval</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
  

export default Lifecycle