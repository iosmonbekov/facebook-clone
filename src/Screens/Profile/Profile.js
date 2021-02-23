import React, { useEffect } from "react";
import Loader from "../../Components/Loader/Loader";
import MyPosts from "./Components/MyPosts/MyPosts";
import ProfileData from "./Components/ProfileData";
import "./Profile.css";

export default function Profile(props) {
    const userId = props.match.params.userId || 1;
    useEffect(() => {
        props.getUser(userId);
    }, []);

    if (!props.profilePage.userProfile) {
        return <Loader />;
    }

    return (
        <div className="profile">
            <ProfileData
                name={props.profilePage.userProfile.name}
                status={props.profilePage.userProfile.status}
                photo={props.profilePage.userProfile.photo}
                location={props.profilePage.userProfile.location}
            />
            <MyPosts
                profilePage={props.profilePage}
                setNewPostText={props.setNewPostText}
                addPostActionCreator={props.addPostActionCreator}
            />
        </div>
    );
}
