import React, {ChangeEvent} from 'react';
import style from './MyPosts.module.css'
import Posts from "./Post/Posts";
import {MyPostPropsType} from "./MyPostsContainer";

function MyPosts (props: MyPostPropsType) {
    const postsElements = props.profilePage.posts.map( p => <Posts message={p.message} id={p.id} likesCount={p.likesCount}/>)

    const addPost = () => {
        props.addPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.updateNewPostText(text);
    }
return (
        <div>
            <div className={style.post}>
                My posts
                <div>
                    <textarea onChange={onPostChange}
                              value={props.profilePage.newPostText}>New Post</textarea>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {postsElements}
        </div>
    );
}

export default MyPosts;




