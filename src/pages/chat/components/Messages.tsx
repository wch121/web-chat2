import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";

export default function Messages() {
    const [messages, setMessages] = useState([]);

    return (
        <div className="messages">
            {messages.map((m) => (
                <Message />
            ))}
        </div>
    )
}
