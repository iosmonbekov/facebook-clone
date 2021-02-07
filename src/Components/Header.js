import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div className="container header-row">
                <Link to="/">facebook</Link>
            </div>
        </header>
    )
}
