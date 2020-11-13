import React, { Component } from "react";    
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';  

const items = [
    'Telugu',
    'Hindi',
    'English',
  ];
class EmployeeForm extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
            empName: '',    
            emailId: '',    
            dob: '',   
            date:'', 
            gender: '',    
            phoneNumber: '',    
            desig: 'select',
            technologies:'select',
            description:'', 
            name:'',  
            Telugu:'',
            Hindi:'',
            English:'', 
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
        this.changeRadio=this.changeRadio.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }  
    handleChange(event) {
        this.setState({
           Telugu: !this.state.Telugu,
           Hindi: !this.state.Hindi,
          English: !this.state.English,


        });
      }
         
    changeRadio(event) {
        console.log(event.target.value);
      }
    Changedate = (e) => {  
        this.setState({  
                date: e  
        });  
}; 
handleDesc=(e)=>{
    this.setState({
        description:e.target.value
    })
}
    handleFormValidation() {    
        const { empName, emailId, dob, gender, phoneNumber, desig,description,technologies } = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
        //Employee name     
        if (!empName) {    
            formIsValid = false;    
            formErrors["empErr"] = "EmployeeName is required.";    
        }    
    
        //Email    
        if (!emailId) {    
            formIsValid = false;    
            formErrors["emailIdErr"] = "Email id is required.";    
        }    
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId))) {    
    
            formIsValid = false;    
            formErrors["emailIdErr"] = "Invalid email id.";    
        }    
    
        //DOB    
        if (!dob) {    
            formIsValid = false;    
            formErrors["dobErr"] = "Date of birth is required.";    
        }    
        else {    
            var pattern = /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d+$/;    
            if (!pattern.test(dob)) {    
                formIsValid = false;    
                formErrors["dobErr"] = "Invalid date of birth";    
            }    
        }    
    
        //Gender    
        if (desig === '' || desig === "select") {    
            formIsValid = false;    
            formErrors["desigErr"] = "Select Designation.";    
        }    
    
        //Phone number    
        if (!phoneNumber) {    
            formIsValid = false;    
            formErrors["phoneNumberErr"] = "Phone number is required.";    
        }    
        else {    
            var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;    
            if (!mobPattern.test(phoneNumber)) {    
                formIsValid = false;    
                formErrors["phoneNumberErr"] = "Invalid phone number.";    
            }    
        }    
    
        //Technology   
        if (technologies === '' || technologies === "select") {    
            formIsValid = false;    
            formErrors["techErr"] = "Select Technologies";    
        }    
    
        this.setState({ formErrors: formErrors });    
        return formIsValid;    
    }  
      //desig

      
   
  

    
    handleChange = (e) => {    
        const { name, value,desig,technologies } = e.target;    
        this.setState({ 
            [name]: value ,
           
        });    
    }    
    
    handleDesig = (e) => {    
        const { desig, value } = e.target;    
        this.setState({ 
            [desig]: value 
           
        });    
    }  
    
    handleTech = (e) => {    
        const { technologies, value} = e.target;    
        this.setState({ 
            [technologies]: value 
           
        });    
    }  
    
    handleSubmit = (e) => {    
        e.preventDefault();    
    
        if (this.handleFormValidation()) {    
            alert('Your details submitted successfully.')    
            this.setState(this.initialState)    
        }    
    }   
    clearForm=()=>{
        this.setState({
            empName:'',
            description:'',
            emailId: '',    
            dob: '',   
            date:'', 
            gender: '',    
            phoneNumber: '',    
            desig: '',
            technologies:'',
            description:'', 
            name:'' , empErr:'', emailIdErr:'',
             dobErr:'',techErr:'', genderErr:'', phoneNumberErr:'', desigErr:'' 
        })
       

        
    } 
    
    render() {    
    
        const { empErr, emailIdErr, dobErr,techErr, genderErr, phoneNumberErr, desigErr } = this.state.formErrors;    
    
        return (    
            <div className="formDiv">    
                <h3 style={{ textAlign: "center",color:'green' }} >Employee Form </ h3>    
                <div>    
                    <form onSubmit={this.handleSubmit}>    
                        <div>    
                            <label htmlFor="empName">Employee Name</label>    
                            <input type="text" name="empName"    
                                value={this.state.empName}    
                                onChange={this.handleChange}    
                                placeholder="Enter employee name"    
                                className={empErr ? ' showError' : ''} />    
                            {empErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{empErr}</div>    
                            }    
    
                        </div>    
                        <div>    
                            <label htmlFor="emailId">Email Id</label>    
                            <input type="text" name="emailId"    
                                value={this.state.emailId}    
                                onChange={this.handleChange}    
                                placeholder="Your email id.."    
                                className={emailIdErr ? ' showError' : ''} />    
                            {emailIdErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{emailIdErr}</div>    
                            }    
    
                        </div>    
                        <div>    
                            <label htmlFor="text">Birth Date</label>    
                            <input type="text" name="dob"    
                                value={this.state.dob}    
                                onChange={this.handleChange}    
                                placeholder="DD/MM/YYYY.."    
                                className={dobErr ? ' showError' : ''} />    
                            {dobErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{dobErr}</div>    
                            }    
                        </div>    
                        <div className="radio" onChange={this.changeRadio}>
          <label>
            <input type="radio" value="male" name="radio" checked={true} />
            Male
          </label>     
          <label>
            <input type="radio" value="female" name="radio" />
            Female
          </label>
          <label>
            <input type="radio" value="others" name="radio" />
            Others
          </label>
        </div>    
                    
                       
                        <div>    
                            <label htmlFor="phoneNumber">Phone Number</label>    
                            <input type="text" name="phoneNumber"    
                                onChange={this.handleChange}    
                                value={this.state.phoneNumber}    
                                placeholder="Your phone number.."    
                                className={phoneNumberErr ? ' showError' : ''} />    
                            {phoneNumberErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{phoneNumberErr}</div>    
                            }    
                        </div>    
                        <div>    
                            <label htmlFor="desig">Designation</label>    
                            <select name="desig" onChange={this.handleChange}    
                                className={desigErr ? ' showError' : ''}    
                                value={this.state.desig} >    
                                <option value="select">Select Designation</option>    
                                <option value="Ass">Associate</option>    
                                <option value="hod">HOD</option>    
                                <option value="snr">senior Associate</option> 
                                <option value="hod">Manager</option> 
                                <option value="hod">QA analyst</option>    
                            </select>    
                            {desigErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{genderErr}</div>    
                            }    
                        </div>    
                        
                        <div>    
                            <label htmlFor="technologies">Technologies</label>    
                            <select name="technologies"    
                                value={this.state.technologies}    
                                onChange={this.handleChange}    
                                className={techErr ? ' showError' : ''} >    
                                <option value="select">--Select--</option>    
                                <option value="Angular">Angular</option>    
                                <option value="python">Python</option>    
                                <option value="java">java</option>    
                                <option value=".net">.Net</option> 
                                <option value="Reactjs">Reactjs</option> 
                            </select>    
                            {techErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{techErr}</div>    
                            }    
                        </div>  
 
                        <div className="form-group">
                        <strong>  <label>DOJ:
          <DatePicker
              selected={ this.state.date}
              onChange={ this.Changedate }
              name="startDate"
              dateFormat="dd/MM/yyyy"
              placeholderText="dd/mm/yyyy"
          /></label></strong>

          
           <button className="btn btn-primary">Show Date</button>
          </div>
                                <div className="textarea">
                                <label>Description
                                    <textarea type="text" style={{width:'80%'}} value={this.state.description} onChange={this.handleDesc}/></label>
                                </div>
             
             <div>                 <label>
            <input
              type="checkbox"
              defaultChecked={this.state.Telugu}
              onChange={this.handleChange}
            /> Telugu
          </label>
          </div>
          <div>                 <label>
            <input
              type="checkbox"
              defaultChecked={this.state.English}
              onChange={this.handleChange}
            /> English
          </label>
          </div>
          <div>                 <label>
            <input
              type="checkbox"
              defaultChecked={this.state.Hindi}
              onChange={this.handleChange}
            /> Hindi
          </label>
          </div>

 
                        <button className="btn btn-primary" onClick={this.handleSubmit} style={{margin:'5px'}}>submit</button>
                        <button className="btn btn-primary" onClick={this.clearForm} style={{margin:'5px'}}>clear</button>
       
                    </form> 

                </div>    
            </div >    
        )    
    }    
}    
    
export default EmployeeForm;