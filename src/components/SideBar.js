import React from 'react'
import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome, faFire, faVideo, faPlayCircle } from '@fortawesome/free-solid-svg-icons'

const SideBar = (props) => {
    return (
        <div className="SideBar">
            <div className="SideBarIcon">
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="SideBarIcon">
                <FontAwesomeIcon icon={faHome} />
                <span className="SideBarIconLabel">Home</span>
            </div>
            <div className="SideBarIcon">
                <FontAwesomeIcon icon={faFire} />
                <span className="SideBarIconLabel">Trending</span>
            </div>
            <div className="SideBarIcon">
                <FontAwesomeIcon icon={faVideo} />
                <span className="SideBarIconLabel">Subscription</span>
            </div>
            <div className="SideBarIcon">
                <FontAwesomeIcon icon={faPlayCircle} />
                <span className="SideBarIconLabel">Library</span>
            </div>
        </div>
    )
}

export default SideBar;