import React from "react";

export default function ProfileData(props) {
    return (
        <>
            <div className="profile-image"></div>
            <div className="profile-info">
                <div className="profile-ava">
                    <img
                        src={
                            props.photo ||
                            "https://images.hdqwalls.com/wallpapers/deadpool-art-4k-2018-y4.jpg"
                        }
                        alt="Ava"
                    />
                </div>
                <ul>
                    <li>
                        <h2>{props.name}</h2>
                    </li>
                    <li>
                        <b>City: </b> {props.location.city}
                    </li>
                    <li>
                        <b>Country:</b> {props.location.country}
                    </li>
                    <li>
                        <b>Status:</b> {props.status}
                    </li>
                </ul>
            </div>
        </>
    );
}
