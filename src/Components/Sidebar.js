import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/messages">Messages</Link>
                </li>
                <li>
                    <Link to="/news">News</Link>
                </li>
                <li>
                    <Link to="/music">Music</Link>
                </li>
                <li>
                    <Link to="/settings">Settings</Link>
                </li>
            </ul>
        </div>
    )
}
