import React from 'react'
import {UserConsumer} from './UserContext'
function User2Component(){
    return(
        <div>
              <UserConsumer>
                    {
                        (value)=>{
                            return <div>Hello {value} </div>
                        }
                    }
                    </UserConsumer>
            </div>
    )
}
export default User2Component