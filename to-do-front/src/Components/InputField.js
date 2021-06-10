import React,{useState} from 'react'
export default function InputField(props) {
    const [newTask,setNewTask] = useState('')
    const newEventAdded = val =>{
        val.preventDefault()
        setNewTask(val.target.children[0].value)
        props.newTaksAdded(val.target.children[0].value)
    }
    return (
        <div className='input-container'>
           <form onSubmit={e=>{newEventAdded(e)}}>
            <input type="text" placeholder='type new task'/>
           </form>
        </div>
    )
}
