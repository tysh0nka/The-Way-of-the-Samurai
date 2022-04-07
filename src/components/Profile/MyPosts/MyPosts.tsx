import React from 'react';
import sMyPost from './MyPosts.module.css'
import sProfile from './../Profile.module.css'
import Posts from "./Post/Posts";
import AddPost from "./Post/AddPost";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {PostType} from "../../../redux/profileReducer";

function MyPosts() {

    const postsElements = useSelector<AppStateType, PostType[]>(state => state.profilePage.posts)
        .map(post => <Posts message={post.message} id={post.id} key={post.id} likesCount={post.likesCount}/> )

    return (
        <div className={`${sMyPost.postBlock} ${sProfile.postBlock}`}>
            <div className={sMyPost.post}>
                <div className={sMyPost.title}>
                    <span className={sMyPost.myPost}>My Post</span>
                </div>
                <AddPost/>
            </div>
            <div className={sMyPost.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;




