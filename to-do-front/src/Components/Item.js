import React from 'react'

export default function Item(props) {
    return (
        <div className='singleElement'> 
            <input type="checkbox"/> 
            {props.text}
        </div>
    )
}
