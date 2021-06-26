import React,{useState,useEffect} from 'react'
import Item from './Components/Item'
import InputField from './Components/InputField'
import Header from './Components/Header'
import {getAllTask,addNewTask } from './API'
function createHash(ta){
    return ta+Math.random()
}
export default function App() {
    const [newTask,setNewTask] = useState('')
    const [taskList,setTaskList] = useState([])
    const newTaskAddedFunc = task =>{
        let taskId = createHash(task)
        setNewTask(task)
        let taskDetails = {
            taskId:taskId,
            task:task,
            status:false
        }
     
        addNewTask(taskDetails).then(res=>{
            console.log(res)
            setTaskList([...taskList,taskDetails])
        }).catch(err=>{
            console.log(err)
        })
    }
    const setStatus = val =>{
        console.log(val)
    }
    const deleteElementFun = eleId =>{
        let newList = taskList.filter(task => task.taskId != eleId)
        setTaskList(newList)
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
                         return <Item deleteElement={deleteElementFun} status={setStatus} key={taskOb.taskId} id={taskOb.taskId} complete={taskOb.status} text={taskOb.task}/>
                     })
                 }
             </ul>
            </div>
        </div>
    )
}
