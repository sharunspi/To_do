import React from 'react'

export default function Item(props) {
    return (
        <li className='singleElement'>
            <input type="checkbox"/> {
            props.text
        } </li>
    )
}
