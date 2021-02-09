import React from 'react'
import MyPosts from '../../Components/MyPosts/MyPosts'
import './Profile.css'

export default function Profile(props) {
    return (
        <div className="profile">
            <div className="profile-image"></div>
            <div className="profile-info">
                <div className="profile-ava">
                    <img src="https://images.hdqwalls.com/wallpapers/deadpool-art-4k-2018-y4.jpg" alt="Ava" />
                </div>
                <ul>
                    <li>
                        <h2>iosmonebekov</h2>
                    </li>
                    <li>Date of Birth: 27 december</li>
                    <li>City: London</li>
                    <li>Education: KSTU(Computer Science)</li>
                    <li>Web site: https://iosmonbekov.com</li>
                </ul>
            </div>
            <MyPosts />
        </div>
    )
}