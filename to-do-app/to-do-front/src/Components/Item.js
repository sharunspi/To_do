import React, { useState } from 'react'
import Draggable from 'react-draggable'
import {deteleATask} from '../API'
export default function Item(props) {
    const [stausOfCheck,setStatusOfCheck] = useState(false)
    const [delStatus,setDelStatus] = useState(false)
    const checkStatus = (stat,id) =>{
        props.status({stat,id})
            setStatusOfCheck(stat)
    }
    const dragStop = eve =>{
        console.log(eve.screenY)
        if(eve.screenY > 300){
            setDelStatus(true)
            setTimeout(()=>{
                deteleATask(props.id).then(res=>{
                    console.log(res)
                    props.deleteElement(props.id)
                }).catch(err=>console.log(err))
            },[1000])
        }else{
            setDelStatus(false)
        }
    }
    return (
       <Draggable onStop={e=>{dragStop(e)}} bounds="parent"   axis={'x'} >
            <li className={delStatus ? 'singleElement delete':'singleElement'}> 
            <input onChange={e=>checkStatus(e.target.checked,props.id)} type="checkbox"/><span > {
            stausOfCheck ? <del> {props.text}</del> : props.text
        }</span> </li>
       </Draggable>
    )
}
