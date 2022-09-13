import axios from "axios";

export function getTitlesFromApi() {

    return async function(dispatch){
        let res = await axios.get('http://localhost:5000/api/posts');
        dispatch({type: "LOAD-TITLES",
                  titles: res.data});

    }
}

export function addBlogPostToApi(data){

    return async function(dispatch){
      
      const {title, description, body} = data;
      let newPost = await axios.post('http://localhost:5000/api/posts', {title, description, body});
      dispatch({type: "ADD-POST",
                payload: newPost});
  }
  }

  export function deleteBlogPostFromApi(id){

    return async function(dispatch){
      
      let newPost = await axios.delete(`http://localhost:5000/api/posts/${id}`);
      dispatch({type: "DELETE-POST",
                payload: id});
  }
  }

  export function editBlogPostAtApi(data){

    return async function(dispatch){
      console.log(data)
      const {title, description, body, postId} = data;
      let res = await axios.put(`http://localhost:5000/api/posts/${postId}`, {title, description, body});
      dispatch({type: "EDIT-POST",
                payload: res.data});
  }
  }

  export function addCommentToApi(data){
    return async function(dispatch){

        console.log(data)
        const {comment, postId} = data;
        let res = await axios.post(`http://localhost:5000/api/posts/${postId}/comments`, {text: comment});
        dispatch({type: "ADD-COMMENT",
                  payload: res.data});
    }
  }

  export function deleteCommentFromApi(data){
    return async function(dispatch){
        const {commentId, postId} = data;
        console.log(data)
        let res = await axios.delete(`http://localhost:5000/api/posts/${postId}/comments/${commentId}`);
        dispatch({type: "DELETE-COMMENT",
                  payload: commentId});
    }
  }

  export function votePostApi(postId, direction){
    return async function(dispatch){
        
        let res = await axios.post(`http://localhost:5000/api/posts/${postId}/vote/${direction}`);
        dispatch({type: "VOTE-POST",
                  payload: res.data.votes,
                postId});
    }


  }
