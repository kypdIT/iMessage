import React, { useState } from 'react'
import "./Chat.css"

import { IconButton } from "@material-ui/core"
import MicNoneIcon from "@material-ui/icons/MicNone"

function Chat() {
    const [input, setInput] = useState("");

    //sau khi nhap 1 tin thi se khong can tai lai trang
    const sendMessage = (e) => {
        e.preventDefault();

        //firebase...

        setInput("")
    };

    return (
        <div className="chat">
            <div className="chat__header">
                <h4>
                    To: <span className="chat__name">Chanel Name</span>
                </h4>
                <strong>Details</strong>
            </div>

            <div className="chat__body">

            </div>

            <div className="chat__input">
                <form>
                    <input 
                    value={input} 
                    onChange={ (e) => setInput(e.target.value) }
                    placeholder="iMessage" 
                    type="text" />
                    <button onClick={sendMessage}>Send Message</button>
                </form>

                <IconButton>
                    <MicNoneIcon className="chat__mic" />
                </IconButton>
                
            </div>
        </div>
    )
}

export default Chat