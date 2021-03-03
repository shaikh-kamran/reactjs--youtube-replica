import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

const Video = (props) => {

    const { video } = props;

    const trimTitle = (title) => {
        if (title.length < 50) {
            return title
        }
        return title.slice(0, 50) + "..."
    }

    return (
        <div className="Video">
            <img className="videoimage" src={video.videoimage} />
            <div className="videodetails">
                <div className="channelimagecontainer">
                    <img src={video.channelimage} className="channelimage" />
                </div>
                <div className="videodescription">
                    <div className="videoname">
                        {trimTitle(video.name)}
                    </div>
                    <div className="channelname">
                        {video.channelname}
                    </div>
                    <div className="viewdetails">
                        <span className="views">
                            {video.views} views
                        </span>
                        <span className="saperator"></span>
                        <span className="uploaddate">
                            {video.date}
                        </span>
                    </div>
                </div>
                <div className="menuicon">
                    <FontAwesomeIcon icon={faEllipsisV} />
                </div>
            </div>
        </div>
    )
}

export default Video;