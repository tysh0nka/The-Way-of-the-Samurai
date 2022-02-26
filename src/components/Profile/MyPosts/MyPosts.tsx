import React, {ChangeEvent} from 'react';
import style from './MyPosts.module.css'
import Posts from "./Post/Posts";
import {MyPostPropsType} from "./MyPostsContainer";
import {AddPostForm, AddPostFormType} from "./Post/AddPost";

function MyPosts (props: MyPostPropsType) {
    const postsElements = props.profilePage.posts.map( p => <Posts message={p.message} id={p.id} likesCount={p.likesCount}/>)

    const addPost = (values: AddPostFormType) => {
        console.log(values)
        props.addPost(values.addPostForm)
    }

return (
        <div>
            <div className={style.post}>
                My posts
                <AddPostForm onSubmit={addPost}/>
            </div>
            {postsElements}
        </div>
    );
}

export default MyPosts;




