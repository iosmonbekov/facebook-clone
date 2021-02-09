import React from 'react'
import Form from './Components/Form'
import Receiver from './Components/Receiver'
import './Messages.css'

export default function Messages() {
    return (
        <div className='up-messages'>
            <h2>Dialogs</h2>
            <div className='messages'>
                <div>
                    <ul>
                        <Receiver />
                        <Receiver />
                        <Receiver />
                        <Receiver />
                        <Receiver />
                        <Receiver />
                        <Receiver />
                        <Receiver />
                    </ul>
                </div>
                <div>
                    <div className='dialog'>
                        {/* Start from there  */}
                    </div>
                    <Form />
                </div>
            </div>
        </div>
    )
}
