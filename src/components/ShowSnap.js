import React from 'react';


const ShowSnap = (props) => (
    <div>
        {<img src='images/react.png' alt={props.post.id} width='500' height='300'></img>}
        <div>
        <button onClick={(e) => props.handleLikePost(props.post)}>{props.post.likes}</button>
        <button>{props.post.comments}</button>
        </div>
        
        <button onClick={(e) => props.handleDeletePost(props.post.id)}>Delete</button>
    </div>
);

export default ShowSnap;