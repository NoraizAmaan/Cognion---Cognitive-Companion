import React from "react";
import "./Message.css";
import userImage from "../images/user.png"

function Message({email, time, message}) {
  const isCurrUser = email === localStorage.getItem("email");

  return (
    <div id="messageContainer" style={isCurrUser ? { textAlign: "right" } : {}}>
      <p className="userId">
         <span>~Anonymous</span>
      </p>
      <div
        id="messageBox"
        style={isCurrUser ? { backgroundColor: "#226A59" } : {}}>
        <img src={userImage} alt="user" />
        <p id="message">{message}</p>
        <p id="time">{time}</p>
      </div>
    </div>
  );
}

export default Message;