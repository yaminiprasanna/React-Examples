import React from 'react'
import './App.css';
import Element from './components/Element'
import Element1 from './components/Element1'
import Class from './components/Class'
import Lifecycle from './components/Lifecycle';
import Greeting from './components/Greeting';
import ChildFunc from './components/ChildFunc'
import ParentFunc from './components/ParentFunc';
import GetDerStateFromProps from './Lifecyclemethods/GetDerStateFromProps';
import Home from './Lifecyclemethods/Home';
import ComponentDidMount from './Lifecyclemethods/ComponentDidMount';
import ComponentDidUpdate from './Lifecyclemethods/ComponentdidUpdate';
import List from './components/List'
import Form from './components/Form'
import DefaultParentProps from './components/DefaultParentProps';
import UParentState from './components/UParentState';
import AdmissionForm from './components/Form1';
import Calculator from './components/composition/Calculator';
import OrderComponent from './components/LiftingStateup/OrderComponent'

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
     <AdmissionForm/>
     <Calculator/>
     <OrderComponent/>
     
    
    </div>
    
  );
}

export default App;
