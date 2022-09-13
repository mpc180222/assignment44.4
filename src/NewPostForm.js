import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {v4 as uuid} from "uuid";



const NewPostForm = ({addBlogPost, postId, editBlogPost, editing = false}) => {

    const INIT_STATE = {title: '', description: '', body: ''};
    const [formData, setFormData] = useState(INIT_STATE);
    const history = useHistory()

    const handleSubmit = evt => {
        evt.preventDefault();
        if(!editing) addBlogPost(formData);
        else {editBlogPost({...formData, postId})};
        setFormData(INIT_STATE);
        history.push("/");
    }

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }

    const handleCancel = evt => {
        evt.preventDefault();
        setFormData(INIT_STATE);
        history.push("/");
    }

   
    return (
        <div>
        <form onSubmit = {handleSubmit}>
            <input name = "title" value = {formData.title} onChange = {handleChange} placeholder = "Title"></input>
            <input name = "description" value = {formData.description} onChange = {handleChange} placeholder = "Description"></input>
            <input type = "textarea" name = "body" value = {formData.body} onChange = {handleChange} placeholder = "Body"></input>
            <button>Save</button>
            
        </form>
        <form onSubmit = {handleCancel}><button>Cancel</button></form>
        </div>



    )

}

export default NewPostForm;