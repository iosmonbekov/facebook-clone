import React from 'react'
import { Link } from 'react-router-dom'
import './Receiver.css'

export default function Receiver(props) {
    return (
        <Link to={'/messages/' + props.name}>
            <li className='receiver' >
                <div style={{background: 'green'}}></div><span>{props.name} </span>
            </li>
        </Link>
    )
}
