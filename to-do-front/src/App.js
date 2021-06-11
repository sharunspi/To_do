import React,{useState,useEffect} from 'react'
import Item from './Components/Item'
import InputField from './Components/InputField'
import Header from './Components/Header'
import {getAllTask } from './API'
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
    useEffect(()=>{
    getAllTask().then(res=>{
        setTaskList(res.data.listOfTasks)
      
    }).catch(err=>{
        console.log(err)
    })
    },[])
    return (
        <div>
            <Header/>
            <InputField newTaksAdded={newTaskAddedFunc}/>
            <div className="inputContainer">
             <ul>
             {
                     taskList.length >0 && 
                     taskList.map((taskOb,index)=>{
                         return <Item status={setStatus} key={taskOb.taskId} id={taskOb.taskId} complete={taskOb.status} text={taskOb.task}/>
                     })
                 }
             </ul>
            </div>
        </div>
    )
}
