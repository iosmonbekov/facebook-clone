import React from "react";

export default function ProfileData(props) {
    return (
        <>
            <div className="profile-image"></div>
            <div className="profile-info">
                <div className="profile-ava">
                    <img
                        src={
                            props.photos.large ||
                            "https://images.hdqwalls.com/wallpapers/deadpool-art-4k-2018-y4.jpg"
                        }
                        alt="Ava"
                    />
                </div>
                <ul>
                    <li>
                        <h2>{props.fullName}</h2>
                    </li>
                    <li>
                        <b>City:</b> SomeWhere
                    </li>
                    <li>
                        <b>Status:</b>{" "}
                        {props.lookingForAJob
                            ? "Searching for a job"
                            : "Working."}
                    </li>
                    <li>
                        <b>About me:</b>{" "}
                        {props.aboutMe || "Nothing about me, I'm just a bot"}
                    </li>
                </ul>
            </div>
        </>
    );
}
