import  React, {useEffect, useState} from 'react'
import Create from './Create' 
import axios from 'axios'
import { BsCircleFill,BsFillCheckCircleFill,BsFillTrashFill } from "react-icons/bs";


function Home() { 
    const [todos,settodos]=useState([])

    useEffect(() =>{
        axios.get('https://todo-1-yut9.onrender.com/get')
        .then(result => settodos(result.data))
        .catch(err => console.log(err))
    },[])


    const handleEdit = (id) =>{
        axios.put('https://todo-1-yut9.onrender.com/update/'+id)
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }
    const handleDelete =(id) =>{
        axios.delete('https://todo-1-yut9.onrender.com/delete/'+id)
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }

    return (
       <div className='home'>
        <h2>todo list</h2>
        <Create/>
        <br />
        <br />
        {
            todos.length === 0 
            ?
            <div><h2>No Record</h2></div>
            :
            todos.map(todo =>(
                <div className='task'> 
                <div className="checkbox"onClick={()=> handleEdit(todo._id)} >
                    {todo.done ?
                    <BsFillCheckCircleFill  className='icon'></BsFillCheckCircleFill>
                   : <BsCircleFill className='icon'/>
                }
                   <p className={todo.done ? "line_through" :""}> {todo.task} </p>
                 </div>
                 <div>
                    <span><BsFillTrashFill className='icon'
                         onClick={() => handleDelete (todo._id)}/></span>
                 </div>
                </div>


            ))
             
        }

       </div>
    )
    
}
export default Home