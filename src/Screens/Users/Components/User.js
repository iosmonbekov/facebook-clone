import React from "react";
import { NavLink } from "react-router-dom";
import "./User.css";

export default function User(props) {
    return (
        <div className="user">
            <div>
                <NavLink to={"/profile/" + props.user.id}>
                    <div
                        className="user_photo"
                        style={{
                            background: `url(${
                                props.user.photo ||
                                "https://i.pinimg.com/originals/2a/bd/2d/2abd2dd4e0fe29f620d12a9d7207800d.jpg"
                            })`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                </NavLink>
                {props.user.followed ? (
                    <button
                        onClick={() => props.followOrUnfollow(props.user.id)}
                    >
                        Follow
                    </button>
                ) : (
                    <button
                        onClick={() => props.followOrUnfollow(props.user.id)}
                    >
                        UnFollow
                    </button>
                )}
            </div>

            <div>
                <div className="user_info">
                    <span>{props.user.name}</span>
                    <span>{props.user.status || "I love this app"}</span>
                </div>
                <div className="user_location">
                    <span>{props.user.location.city || "City"}</span>
                    <span>{props.user.location.country || "Country"}</span>
                </div>
            </div>
        </div>
    );
}
