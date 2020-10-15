import React from 'react'
import "./SidebarChat.css"

import { Avatar } from "@material-ui/core"

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                {/* CHANEL NAME */}
                <h3>Chanel Name</h3>
                {/* MESSAGE WAITTING */}
                <p>message.......</p>
                {/* TIME */}
                <small>time</small>
            </div>
        </div>
    )
}

export default SidebarChat
