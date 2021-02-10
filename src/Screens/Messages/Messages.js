import React, { } from 'react'
import Form from './Components/Form'
import Letter from './Components/Letter'
import Receiver from './Components/Receiver'
import './Messages.css'

export default function Messages() {

    return (
        <div className='up-messages'>
            <h2>Dialogs</h2>
            <div className='messages'>
                <div>
                    <ul>
                        <Receiver name='Naruto' />
                        <Receiver name='Sasuke'/>
                        <Receiver name='Yagami' />
                        <Receiver name='Member'/>
                    </ul>
                </div>
                <div>
                    <div className='dialog'>
                        <Letter />
                    </div>
                    <Form />
                </div>
            </div>
        </div>
    )
}
