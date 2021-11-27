import React from 'react';
import style from './MyPosts.module.css'
import Posts from "./Post/Posts";
import {PostType} from "../../../redux/state";

export type MyPostsType = {
    posts : Array<PostType>
}

function MyPosts (props: MyPostsType) {

    const postsElements = props.posts.map( p => <Posts message={p.message} id={p.id} likesCount={p.likesCount}/>)


    return (
        <div>
            <div className={style.post}>
                My posts
                <div>
                    <textarea>New Post</textarea>
                    <button>Add post</button>
                </div>
            </div>
            {postsElements}
        </div>
    );
}

export default MyPosts;