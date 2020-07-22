import React from 'react';
import ShowSnap from './ShowSnap';

class HomePage extends React.Component {
    state={
        posts:[
        {
            id: 1,
            likes: 2,
            comments: 2
        },
        {
            id: 2,
            likes: 8,
            comments: 4
        },
        {
            id: 3,
            likes: 98,
            comments: 15
        }
    ]
}
    

    handleDeletePost = (idToRemove) => {
        this.setState((prevState) => ({
            posts: prevState.posts.filter((post) => idToRemove !== post.id)
        }
        ));
    }

    handleLikePost = (postToLike) => {
        this.setState((prevState) => {
            posts: prevState.posts.map((post) => {
                if(JSON.stringify(post) == JSON.stringify(postToLike)){
                    post.likes = post.likes + 1;
                }
            })
            
    });
    }

    render(){
        return (
            <div>
            <p>This is the homepage</p>
            <div className = "container">
                {this.state.posts.map((post) => 
                    <ShowSnap
                     key={post.id}
                     post={post}
                     handleDeletePost={this.handleDeletePost}
                     handleLikePost={this.handleLikePost}
                     />
                )}
            </div>
            </div>
        )
    }
}

export default HomePage;