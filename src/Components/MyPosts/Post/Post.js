import React from 'react'
import './Post.css'

export default function Post(props) {
    return (
        <div className='post'>
            <div></div>
            <div>{props.text || "Some Text"}</div>
        </div>
    )
}
