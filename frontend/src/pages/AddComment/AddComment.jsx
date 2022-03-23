
import React from "react"
import {useNavigate} from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"
import axios from "axios"

// Values line up with backend model data
let initialValues = {
    user: "",
    video_id: "",
    text: "",
    likes:"",
    dislikes:"",
};

// function for adding a comment
const AddComment = () => {
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewComment)

    async function postNewComment(){
        try {
            let  response = await axios.post("http://127.0.0.1:8000/api/comments/all/", formData, {
                headers: {

                    Authorization: 'Bearer ' + token
                }

            })
            navigate("/")   
        } catch (error) {
            console.log(error.message)
            
        }
    }
    
    return (
        <div className="container">

            <form className="form" onSubmit={handleSubmit}>
                <label>
                    User:{" "}
                    <input
                    type="text"
                    name="user"
                    value={formData.user}
                    onChange={handleInputChange}
                    />
                </label>
                <label>
                    Video:{" "}
                    <input
                    type="text"
                    name="video_id"
                    value={formData.video_id}
                    onChange={handleInputChange}
                    />
                </label>
                <label>
                    Comment:{" "}
                    <input
                    type="text"
                    name="text"
                    value={formData.text}
                    onChange={handleInputChange}
                    />
                </label>
                <label>
                    Likes:{" "}
                    <input
                    type="text"
                    name="likes"
                    value={formData.likes}
                    onChange={handleInputChange}
                    />
                </label>
                <label>
                    Dislikes:{" "}
                    <input
                    type="text"
                    name="dislikes"
                    value={formData.dislikes}
                    onChange={handleInputChange}
                    />
                </label>
                <button>Post</button>
                
            </form>
        </div>
    );
}
export default AddComment