import React from 'react'
import "./Sidebar.css"
import SidebarChat from "./SidebarChat"

import { Avatar, IconButton } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="" className="sidebar__avatar"/>

                <div className="sidebar__input">
                    <SearchIcon />
                </div>

                <IconButton variant="outlined" className="sidebar__inputButton">
                    <RateReviewOutlinedIcon />
                </IconButton>

            </div>

            <div className="sidebar__chats">
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar