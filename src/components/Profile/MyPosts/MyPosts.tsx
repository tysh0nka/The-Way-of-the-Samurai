import React from 'react';
import style from './MyPosts.module.css'
import Posts from "./Post/Posts";
import {PostType} from "../../../redux/state";

export type MyPostsType = {
    posts : Array<PostType>
    addPost: () => void
    newPostText: (text :string) => void
    newText: string
}

function MyPosts (props: MyPostsType) {

    const postsElements = props.posts.map( p => <Posts message={p.message} id={p.id} likesCount={p.likesCount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const onPostChange = () => {
        debugger;
        const text = newPostElement.current?.value as string
        props.newPostText(text);
    }
return (
        <div>
            <div className={style.post}>
                My posts
                <div>
                    <textarea onChange={onPostChange}
                              value={props.newText}
                        ref={newPostElement}>New Post</textarea>
                    <button onClick={props.addPost}>Add post</button>
                </div>
            </div>
            {postsElements}
        </div>
    );
}

export default MyPosts;