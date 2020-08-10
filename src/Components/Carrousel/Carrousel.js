import React, { useState, useEffect } from 'react'
import { createClient } from 'pexels'
import ReactPlayer from 'react-player'

import styles from './Carrousel.module.css'

const client = createClient(process.env.REACT_APP_KEY_PEXELS);



const Carrousel = ({children}) => {

    const [videos, setVideo] = useState({})

    const videoFetch = () => {

        client.videos.show({ id: 3433789 })
            .then(video => {
                setVideo(video.video_files[3])
            })

    }

    useEffect(() => {
        videoFetch()

    }, [])


    // const style = {
    //     "position": 'fixed',
    //     "objectFit": 'cover',
    //     "transition": '1.2s',
    //     'zIndex': '-10'
    // }

    return (

        // <video autoPlay muted>
        //     <source src={url} type={videos.file_type}/>
        // </video>
        <div className={styles.carrousel}>
            <ReactPlayer
                // className='video'
                url={videos.link}
                controls={false}
                playing
                loop={true}
                muted
                // width='100%'
                // height='100vh'
                // style={style}    
            />
            {children}
        </div>
    )

    //     <video autoplay muted id="video1" class="video1">
    //          <source src="./vid/video1.mp4" type="video/mp4">
    //      </video>

}

export default Carrousel