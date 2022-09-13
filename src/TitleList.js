import React, {useState} from "react";
import { useParams } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import TitleCard from "./TitleCard";


function TitleList({blogPosts, votePost}){

    const blogTitles = useSelector(st => st.titles);

    return(
        <div>
            {blogTitles && blogTitles.sort((a, b)=> b.votes - a.votes).map((entry) => <TitleCard title = {entry.title} description = {entry.description} 
            id = {entry.id} votePost = {votePost} votes = {entry.votes}></TitleCard>)}
        </div>
    )




if(!blogTitles ) return(
    <div>
        {blogPosts && Object.entries(blogPosts).map((entry) => <TitleCard title = {entry[1].title} description = {entry[1].description} id = {entry[0]}></TitleCard>)}
    </div>
)


}

export default TitleList;