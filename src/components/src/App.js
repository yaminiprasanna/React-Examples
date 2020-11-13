import React from 'react'
import './App.css';
import Element from './components/Elements/Element'
import Element1 from './components/Elements/Element1'
import Class from './components/Elements/Class'
import Lifecycle from './components/Elements/Lifecycle';
import Greeting from './components/ConditionalRendering/Greeting';
import ChildFunc from './components/Parent-childFunc/ChildFunc'
import ParentFunc from './components/Parent-childFunc/ParentFunc';
import GetDerStateFromProps from './Lifecyclemethods/GetDerStateFromProps';
import Home from './Lifecyclemethods/Home';
import ComponentDidMount from './Lifecyclemethods/ComponentDidMount';
import ComponentDidUpdate from './Lifecyclemethods/ComponentdidUpdate';
import List from './components/List'
//import Form from './components/Forms/Form'
import DefaultParentProps from './components/DefaultProps/DefaultParentProps';
import UParentState from './Tasks/UParentState';
//import AdmissionForm from './components/Forms/Form1';
import Calculator from './components/composition/Calculator';
import OrderComponent from './components/LiftingStateup/OrderComponent'
import EmployeeForm from './Forms/EmployeeForm'
import Context from './Tasks/Context'

function App() {
  
  return (
    <div className="App">
    {/* <Element/>
    <Class/> 
     <Lifecycle/>
     <Greeting isLoggedIn={false}/> */}
     {/* <ParentFunc/>
     <GetDerStateFromProps/>
     <Home/> */}
     <ComponentDidMount/>
     <ComponentDidUpdate/>
     <List/>
     {/* <Form/> */}
     <DefaultParentProps/>
     <UParentState/>
     {/* <AdmissionForm/> */}
     <Calculator/>
     <OrderComponent/>
    <EmployeeForm/> 
    <Context/>
     
    </div>
    
  );
}

export default App;
