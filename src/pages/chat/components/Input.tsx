import React from 'react'

export default function Input() {
    return (
        <div className="input">
            <input
                type="text"
                placeholder="Type something..."
            />
            <div className="send">
                <img  alt="" />
                <input
                    type="file"
                    style={{ display: "none" }}
                    id="file"
                />
                <label htmlFor="file">
                    <img  alt="" />
                </label>
                <button >Send</button>
            </div>
        </div>
    )
}
