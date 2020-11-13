import React from 'react'
import axios from 'axios'
import {UserProvider} from './UserContext'
import User1Component from './User1Component'
class Context extends React.Component{
    constructor(){
        super()
        this.state={
            posts:[],
            isLoading:true,
            error:''

        }
    }
    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/posts'
    ).then(res=>this.setState({
    posts:res.data,
    isLoading:false}),
    
).catch(err=>this.setState({
   error:err,
   isLoading:false
}))
    }
    handleData=()=>{
        this.setState({
            Empdata:this.state.employees
        })
    }
    
   

    render(){
        const{posts,isLoading,error}=this.state
        let postdata
        if(error){
            <h1> sorry:( Error Occurred</h1>
        }
        
        return(
          postdata= <div>
         <ol>
              List of Posts
              {
                  posts.length?
                  posts.map(post=><div key={post.id}>{post.title}</div>):null
              }
              </ol>
              
              <div>
    <UserProvider postsdata={postdata} value="yamini"  >
     <User1Component/>
     </UserProvider>
              </div>
    </div>
            )
    }
}
export default Context