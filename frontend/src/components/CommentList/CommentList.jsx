import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentList = (props) => {

    const [comments, setComments] = useState([{user: '', text: '', likes: '', videoId: '' , dislikes: '' }]) 

    useEffect(() => {
        getAllComments();
      }, [])

    async function getAllComments(){
        let response = await axios.get('http://127.0.0.1:8000/api/comments/all/');
        setComments(response.data);
        console.log(response.data)
        console.log(comments)
        let comments = comments.user


      }
    return(
        
        
        <table>
    <div>
        <thead>
            <tr>
                <th>User</th>
                <th>Comment</th>
                <th>Likes</th>
                <th>Dislikes</th>

            </tr>
        </thead>

    </div>
    <div>
        <tbody>
            {props.commentEntries.map((entry, index) => {
                return(
                    <div>
                        <tr>
                        <td>{index + 1 }</td>
                        <td>{entry.user}</td>
                        <td>{entry.text}</td>
                        <td>{entry.likes}</td>
                        <td>{entry.dislikes}</td>

                        </tr>
                    </div>
                    );
                })}

        </tbody>
    </div>
    </table> 
    );

}
export default CommentList