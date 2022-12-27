import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";

const Cam =require("../img/cam.png");
const Add =require("../img/add.png") ;
const More =require("../img/more.png");

const Chat = () => {
    return (
        <div className="chat">
            <div className="chatInfo">
                <span>名字</span>
                <div className="chatIcons">
                    <img src={Cam} alt="" />
                    <img src={Add} alt="" />
                    <img src={More} alt="" />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    );
};

export default Chat;
