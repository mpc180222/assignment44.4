import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import NewPostForm from "./NewPostForm";
import {useSelector, useDispatch} from "react-redux";

function IndivPostView({blogPosts, deleteBlogPost, editBlogPost, addBlogComment, deleteBlogComment, votePost}){

const {postId} = useParams();
const history = useHistory();
const dispatch = useDispatch();

const post = useSelector(st => st.posts);

const [isEditing, setIsEditing] = useState(false);
const [commentFormData, setCommentFormData] = useState({comment: ''});


function getPostDetail(postId) {

    return async function(dispatch){
        let res = await axios.get(`http://localhost:5000/api/posts/${postId}`);
        dispatch({type: "LOAD-POST",
                  payload: res.data});
    }
}

 useEffect(() => {
    console.log('use effect')
    dispatch(getPostDetail(postId))
}, [dispatch])


const handleCommentChange = evt => {
    const { name, value } = evt.target;
    setCommentFormData(fData => ({
        ...fData,
        [name]: value
    }))}

const handleCommentSubmit = evt => {
        evt.preventDefault();
        addBlogComment({...commentFormData, postId});
        setCommentFormData({comment: ''});
       
}

const handleCommentDelete = evt => {
    const commentId = evt.target.getAttribute("data-commentid");
    deleteBlogComment({postId,commentId});

}

const handleDelete = evt => {
    evt.preventDefault();
    deleteBlogPost(postId);
    history.push("/");
}

const handleEditClick = evt => {

    setIsEditing(!isEditing);
}

const voteUp = evt => {

    votePost(postId, 'up');

}

const voteDown = evt => {

    votePost(postId, 'down');
}

{if(!post) return(<div><h1>Post not found!</h1></div>)}

return(
    <div>
        {!isEditing && <div>
        <h1>{post && post.title}</h1>
        <h2>{post && post.description}</h2>
        <p>{post && post.body}</p><br></br>
        <p>{post.votes} votes</p><br></br>
        <button onClick = {voteUp}>Vote Up</button>
        <button onClick = {voteDown}>Vote Down</button>

        {post.comments && <ul>
            {post.comments.map((comment)=> <li>{comment.text} <button onClick = {handleCommentDelete} data-commentid = {comment.id}>X</button> </li>)}
            </ul>}
        <form onSubmit = {handleCommentSubmit}>
            <input placeholder = "New Comment" name = "comment" value = {commentFormData.comment} onChange = {handleCommentChange}></input>
            <button>Add comment</button>
        </form>

        <form onSubmit = {handleDelete}>
            <button>Delete Post</button>
        </form>
            <button onClick = {handleEditClick}>Edit Post</button></div>}
            {isEditing && <br></br> && <NewPostForm postId = {postId} editing = {true} editBlogPost={editBlogPost}></NewPostForm> }
    </div>
)


}

export default IndivPostView;