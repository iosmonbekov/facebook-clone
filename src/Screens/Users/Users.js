import axios from "axios";
import React, { useEffect } from "react";
import User from "./Components/User";

export default function Users(props) {
  console.log("start");
  useEffect(() => {
    // props.getUsers([]);
    // axios.get();
    console.log("end");
  }, []);

  return (
    <div className="users">
      {props.usersPage.users.map((el) => {
        return (
          <User
            key={el.id}
            id={el.id}
            photo={el.photo}
            name={el.name}
            status={el.status}
            city={el.location.city}
            country={el.location.country}
            followed={el.followed}
            followToHim={props.followToHim}
          />
        );
      })}
    </div>
  );
}
