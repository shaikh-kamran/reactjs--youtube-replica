import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMicrophone, faVideo, faTh, faBell, faUser } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
    return (
        <div className="Header">
            <div className="logoArea">
                <img className="logo" src="logo.png" />
            </div>
            <div className="searchBarArea">
                <input className="searchInput" placeholder="Search..." />
                <div className="searchIcon">
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <div className="searchMic">
                    <FontAwesomeIcon icon={faMicrophone} />
                </div>
            </div>
            <div className="rightMenu">
                <FontAwesomeIcon className="rightMenuIcon" icon={faVideo} />
                <FontAwesomeIcon className="rightMenuIcon" icon={faTh} />
                <FontAwesomeIcon className="rightMenuIcon" icon={faBell} />
                <FontAwesomeIcon className="rightMenuIcon" icon={faUser} />
            </div>
        </div>
    )
}

export default Header;