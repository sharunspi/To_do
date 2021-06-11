import axios from 'axios'
export const getAllTask = async ()=>{
    let data = await axios.get('http://localhost:3001/get_list',{headers:{
        'Content-Type':'application/json'
    }})
    return data
}