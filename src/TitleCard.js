import React, {useState} from "react";
import { useParams, Link } from "react-router-dom";



function TitleCard({title, description, id, votePost, votes}){

const voteUp = evt => {

    votePost(id, 'up');

}

const voteDown = evt => {

    votePost(id, 'down');
}


return(
    <div style ={{border: 'solid', margin: '5px'}} className = "card">
       <Link to = {`/posts/${id}`}><h3>{title}</h3></Link>
       <p>{description}</p>
       <p>{votes} votes</p>
        <button onClick = {voteUp}>Vote Up</button>
        <button onClick = {voteDown}>Vote Down</button>
    </div>
)


}

export default TitleCard;