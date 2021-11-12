import React from 'react';
import style from './MyPosts.module.css'
import Posts from "./Post/Posts";


function MyPosts () {
    return (
        <div>
            <div className={style.post}>
                My posts
                <div>
                    <textarea>New Post</textarea>
                    <button>Add post</button>
                </div>
            </div>
            <Posts message={'Hello'} id={1} LikesCount={1}/>
            <Posts message={'Hi'} id={2} LikesCount={1}/>
        </div>
    );
}

export default MyPosts;