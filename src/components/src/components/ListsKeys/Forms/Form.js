import React from 'react'
class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: ''
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <div>
          <label>
              Description:
              <textarea>Heyyy hello ....</textarea>
          </label>
          </div>
          <div>
          <select>
              <option value="mango">mango</option>
              <option value="banana">banana</option>
              <option value="grapes">grapes</option>
              <option value="orange">orange</option>
              </select>
              </div>
   {/* <div>
       <input type="checkbox">English</input>
       <input type="checkbox">Hindi</input>
       <input type="checkbox">Telugu</input>
       </div>
       <div>
           <input type="radio">male:</input>
           <input type="radio">Female:</input>
           </div>
               */}


          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  export default Form