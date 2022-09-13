import React, {useState} from "react";
import TitleList from "./TitleList";


function Homepage({blogPosts, blogTitles, votePost}){



return(
    <div>
        <h1>Homepage</h1>
        <TitleList blogPosts = {blogPosts} blogTitles = {blogTitles} votePost = {votePost}></TitleList>
    </div>
)


}

export default Homepage;