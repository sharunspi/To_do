import axios from 'axios'
import {backendUrl} from '../config'
export const getAllTask = async ()=>{
    let data = await axios.get(`${backendUrl}/get_list`,{headers:{
        'Content-Type':'application/json'
    }})
    return data
}

export const deteleATask = async (id)=>{
    let data = await axios.delete(`${backendUrl}/task/${id}`,{headers:{
        'Content-Type':'application/json'
    }})
    return data
}

export const deteleAllTask = async ()=>{
    let data = await axios.delete(`${backendUrl}/all`,{headers:{
        'Content-Type':'application/json'
    }})
    return data
}

export const addNewTask = async (task)=>{
    let data = await axios.post(`${backendUrl}/add_new_task`,task,{headers:{
        'Content-Type':'application/json'
    }})
    return data
}