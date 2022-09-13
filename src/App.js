import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { Route, Switch } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import Navbar from "./Navbar";
import RoutesMaster from "./RoutesMaster";
import { getTitlesFromApi, addBlogPostToApi,
deleteBlogPostFromApi, editBlogPostAtApi, addCommentToApi, deleteCommentFromApi, votePostApi } from "./actionCreators";
import axios from "axios";


function App() {

  const blogPosts = useSelector(st => st.posts);
  const blogTitles = useSelector(st => st.titles);

  const dispatch = useDispatch();

  function addBlogPost(data){

    dispatch(addBlogPostToApi(data));
    
  }

  useEffect(() => {
dispatch(getTitlesFromApi())
  }, [dispatch, blogPosts])

  function deleteBlogPost(delId){
  dispatch(deleteBlogPostFromApi(delId));
  }

  function editBlogPost(data){
    dispatch(editBlogPostAtApi(data));
  }

  function addBlogComment(data){
    dispatch(addCommentToApi(data));
  }

  function deleteBlogComment(data){
    dispatch(deleteCommentFromApi(data));
  }

  function votePost(postId, direction){
    dispatch(votePostApi(postId, direction))
  }



  return (
    <div className="App">
      <Navbar></Navbar>
      <RoutesMaster blogPosts = {blogPosts} addBlogPost = {addBlogPost} deleteBlogPost = {deleteBlogPost}
      editBlogPost = {editBlogPost} 
      deleteBlogComment= {deleteBlogComment}
        addBlogComment = {addBlogComment}
        blogTitles = {blogTitles}
        votePost = {votePost}
      >
      </RoutesMaster>
    </div>
  );
}

export default App;
