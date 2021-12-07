import React, {ChangeEvent} from 'react';
import style from './MyPosts.module.css'
import Posts from "./Post/Posts";
import {ActionType, AddActionCreate, NewPostTextActionCreate, PostType} from "../../../redux/state";

export type MyPostsType = {
    posts : Array<PostType>
    dispatch: (action: ActionType) => void
    newText: string
}

function MyPosts (props: MyPostsType) {

    const postsElements = props.posts.map( p => <Posts message={p.message} id={p.id} likesCount={p.likesCount}/>)

    const addPost = () => {
        props.dispatch(AddActionCreate())
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.dispatch(NewPostTextActionCreate(text));
    }
return (
        <div>
            <div className={style.post}>
                My posts
                <div>
                    <textarea onChange={onPostChange}
                              value={props.newText}>New Post</textarea>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {postsElements}
        </div>
    );
}

export default MyPosts;




