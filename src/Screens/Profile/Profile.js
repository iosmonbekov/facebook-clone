import axios from "axios";
import React, { useEffect } from "react";
import Loader from "../../Components/Loader/Loader";
import MyPosts from "./Components/MyPosts/MyPosts";
import ProfileData from "./Components/ProfileData";
import "./Profile.css";

export default function Profile(props) {
    const userId = props.match.params.userId || 2;
    useEffect(() => {
        axios
            .get(
                "https://social-network.samuraijs.com/api/1.0/profile/" + userId
            )
            .then((response) => {
                props.setUserProfile(response.data);
            });
    }, []);

    if (!props.profilePage.userProfile) {
        return <Loader />;
    }

    return (
        <div className="profile">
            <ProfileData
                fullName={props.profilePage.userProfile.fullName}
                aboutMe={props.profilePage.userProfile.aboutMe}
                photos={props.profilePage.userProfile.photos}
            />
            <MyPosts
                profilePage={props.profilePage}
                setNewPostText={props.setNewPostText}
                addPostActionCreator={props.addPostActionCreator}
            />
        </div>
    );
}
