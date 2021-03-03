import React, { useState } from 'react'
import './Videos.css'
import Video from './Video'

const Videos = (props) => {

    const [videos] = useState([
        {
            videoimage: "video1.png",
            name: "The beginning of AlphaGo | Historic match of 'GO' between Artificial intelligence and World Champion",
            views: 81,
            date: "1 week ago",
            channelname: "Kode with Kamran",
            channelimage: "channellogo.png"
        },
        {
            videoimage: "video2.png",
            name: "The beginning of AlphaGo | Historic match of 'GO' between Artificial intelligence and World Champion",
            views: 81,
            date: "1 week ago",
            channelname: "Kode with Kamran",
            channelimage: "channellogo.png"
        },
        {
            videoimage: "video3.png",
            name: "The beginning of AlphaGo | Historic match of 'GO' between Artificial intelligence and World Champion",
            views: 81,
            date: "1 week ago",
            channelname: "Kode with Kamran",
            channelimage: "channellogo.png"
        },
        {
            videoimage: "video4.png",
            name: "The beginning of AlphaGo | Historic match of 'GO' between Artificial intelligence and World Champion",
            views: 81,
            date: "1 week ago",
            channelname: "Kode with Kamran",
            channelimage: "channellogo.png"
        },
        {
            videoimage: "video5.png",
            name: "The beginning of AlphaGo | Historic match of 'GO' between Artificial intelligence and World Champion",
            views: 81,
            date: "1 week ago",
            channelname: "Kode with Kamran",
            channelimage: "channellogo.png"
        },
        {
            videoimage: "video6.png",
            name: "The beginning of AlphaGo | Historic match of 'GO' between Artificial intelligence and World Champion",
            views: 81,
            date: "1 week ago",
            channelname: "Kode with Kamran",
            channelimage: "channellogo.png"
        },
        {
            videoimage: "video7.png",
            name: "The beginning of AlphaGo | Historic match of 'GO' between Artificial intelligence and World Champion",
            views: 81,
            date: "1 week ago",
            channelname: "Kode with Kamran",
            channelimage: "channellogo.png"
        },
        {
            videoimage: "video8.png",
            name: "The beginning of AlphaGo | Historic match of 'GO' between Artificial intelligence and World Champion",
            views: 81,
            date: "1 week ago",
            channelname: "Kode with Kamran",
            channelimage: "channellogo.png"
        }
    ]);

    return (
        <div className="Videos">
            {
                videos.map((video) => {
                    return (
                        <Video video={video} />
                    )
                })
            }
        </div>
    )
}

export default Videos;