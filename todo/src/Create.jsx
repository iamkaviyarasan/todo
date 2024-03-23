import React from 'react'
import axios from 'axios'

function create() {
    const [task,settask] =usestate()
    const handleAdd =()=> {
        axios.post ('http://localhost:3001/add',)
    }
    return(
        <div className='create-form'>
           <input type="text" name="" id="" placeholder='Enter task' />
           <button type="button">Add</button>
        </div>
    )
    
}
export default create