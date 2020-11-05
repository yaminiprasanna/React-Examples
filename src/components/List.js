import React,{Component} from 'react'
import Person from './Person'
function List(props) {
  const  names=[
      {
          name:'harini',
          age:25,
          id:1
      },
      {
        name:'ramya',
        age:26,
        id:2 

      }
  ]
  const  personList=names.map(person=><Person key={person.id} person={person}/>)
  return(
      <div>
          {personList}
          </div>
  );
}
  
  export default List
  
 
   
   
 