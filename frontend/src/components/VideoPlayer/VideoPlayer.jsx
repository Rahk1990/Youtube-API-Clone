import CommentList from '../CommentList/CommentList';


import React from 'react';



const VideoPlayer = (props) => {

    // const [comments, setComments] = useState([{user: '', text: '', likes: '', videoId: '' , dislikes: '' }]) 
    // function playVideo()
    // const videoId = "smqhSl0u_sI";
    const videoId = props.currentVideoId;
    console.log(videoId)
    const videoTitle = props.currentVideoTitle;
    console.log(videoTitle)
    const videoDescription = props.currentVideoDescription;
    console.log(videoDescription)
    // const commentList = props.commentList

    // useEffect(() => {
    //     getAllComments();
    //   }, [])

    // async function getAllComments(){
    //     let response = await axios.get('http://127.0.0.1:8000/api/comments/all/');
    //     setComments(response.data);
    //     console.log(response.data)
    //     console.log(comments)
    //     let comments = comments.user


    //   }
// Comment List


    return (

        <div>
            <h4>{videoTitle}</h4>
                    <iframe id="ytplayer" type="text/html" width="640" height="360"
            src={`https://www.youtube.com/embed/${videoId}/`}
            frameborder="0"></iframe>
            <p>{videoDescription}</p>
            {/* <div><CommentList /></div> */}
            {/* <div> <p>Comments{comments.text}</p></div> */}
        </div>
        
    );

}

export default VideoPlayer;