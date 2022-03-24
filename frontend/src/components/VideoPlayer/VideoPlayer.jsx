import React from 'react';



const VideoPlayer = (props) => {
   
    // function playVideo()
    // const videoId = "smqhSl0u_sI";
    const videoId = props.currentVideoId;
    console.log(videoId)
    const videoTitle = props.currentVideoTitle;
    console.log(videoTitle)
    const videoDescription = props.currentVideoDescription;
    console.log(videoDescription)


    return (

        <div>
            <h4>{videoTitle}</h4>
                    <iframe id="ytplayer" type="text/html" width="640" height="360"
            src={`https://www.youtube.com/embed/${videoId}/`}
            frameborder="0"></iframe>
            <p>{videoDescription}</p>
        </div>
    );
}

export default VideoPlayer;