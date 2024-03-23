import  React, {useState} from 'react'
import Create from './create'

function Home() { 
    const [todos,settodos]=useState([])
    return (
       <div className='home'>
        <h2>todo list</h2>
        <Create/>
        {
            todos.length === 0 
            ?
            <div><h2>No Record</h2></div>
            :
            todos.map(todo =>(
                <div>
                   {todo}
                </div>

            ))
             
        }

       </div>
    )
    
}
export default Home