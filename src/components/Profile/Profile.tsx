import React from 'react';
import '../../App.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";


export type ProfileType = {
    posts : Array<PostType>
    addPost: () => void
    newPostText: (text: string) => void
    newText: string
}

function Profile (props: ProfileType) {
    return (
        <div className={'content'}>
           <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost}  newPostText={props.newPostText} newText={props.newText}/>

        </div>
    );
}

export default Profile;