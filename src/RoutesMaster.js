import React from 'react';
import { Route } from "react-router-dom";
import Homepage from "./Homepage";
import NewPostForm from "./NewPostForm";
import IndivPostView from './IndivPostView';


function RoutesMaster({addBlogPost, blogPosts, deleteBlogPost, editBlogPost, addBlogComment, deleteBlogComment, blogTitles, votePost}){

    return (
        <div>
            <Route exact path = "/">
            <Homepage blogPosts = {blogPosts} blogTitles = {blogTitles} votePost = {votePost}></Homepage>
            </Route>
            <Route exact path = "/new">
                <NewPostForm blogPosts = {blogPosts} addBlogPost = {addBlogPost}></NewPostForm>
            </Route>
            <Route exact path = "/posts/:postId">
                <IndivPostView blogPosts = {blogPosts} deleteBlogPost = {deleteBlogPost} editBlogPost = {editBlogPost}
                addBlogComment = {addBlogComment} deleteBlogComment = {deleteBlogComment} votePost = {votePost}></IndivPostView>
            </Route>


        </div>

    )




}

export default RoutesMaster;



