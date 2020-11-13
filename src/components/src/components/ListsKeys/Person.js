import React,{Component} from 'react'
function Person({person,key}){
    return(
        <div>
            <h2>Iam {person.name} with age{person.age} and my id is {person.id}</h2> </div>
    )
}
export default Person