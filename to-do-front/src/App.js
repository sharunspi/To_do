import React,{useState} from 'react'
import Item from './Components/Item'
import InputField from './Components/InputField'
import Header from './Components/Header'
export default function App() {
    const [newTask,setNewTask] = useState('')
    const [taskList,setTaskList] = useState([])
    const newTaskAddedFunc = task =>{
        setNewTask(task)
        setTaskList([...taskList,{
            text:task,
            complete:false
        }])
    }
    const setStatus = val =>{
        console.log(val)
    }
    return (
        <div>
            <Header/>
            <InputField newTaksAdded={newTaskAddedFunc}/>
            <div className="inputContainer">
             <ul>
             {
                     taskList.length >0 && 
                     taskList.map((taskOb,index)=>{
                         return <Item status={setStatus} key={index} id={index} complete={taskOb.complete} text={taskOb.text}/>
                     })
                 }
             </ul>
            </div>
        </div>
    )
}
