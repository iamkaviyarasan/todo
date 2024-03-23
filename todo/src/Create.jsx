import React from 'react'
import axios from 'axios'

function create() {
    const [task,setTask] =usestate()
    const handleAdd =()=> {
        axios.post ('http://localhost:3001/add',{task:task})
        .then(result => console.log(result))
        .catch(err=>console.log(err))
    }
    return(
        <div className='create-form'>
           <input type="text" placeholder='Enter task' onChange={(e) => setTask(e.target.value)} />
           <button type="button" onClick={handleAdd}>Add</button>
        </div>
    )
    
}
export default create