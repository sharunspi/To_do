import React, { useState } from 'react'

export default function Item(props) {
    const [stausOfCheck,setStatusOfCheck] = useState(false)
    const checkStatus = (stat,id) =>{
        props.status({stat,id})
            setStatusOfCheck(stat)
    }
    return (
        <li className='singleElement'>
            <input onChange={e=>checkStatus(e.target.checked,props.id)} type="checkbox"/> {
            stausOfCheck ? <del> {props.text}</del> : props.text
        } </li>
    )
}
