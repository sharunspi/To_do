import React from 'react'

export default function Item(props) {
    const checkStatus = stat =>{
        console.log(stat)
        console.log(props.id)
    }
    return (
        <li className='singleElement'>
            <input checked={props.complete} onChange={e=>checkStatus(e.target.checked)} type="checkbox"/> {
            props.text
        } </li>
    )
}
