import React from 'react';
import '../../App.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, PostType} from "../../redux/state";


export type ProfileType = {
    posts : Array<PostType>
    dispatch: (action: ActionType) => void
    newText: string
}

function Profile (props: ProfileType) {
    return (
        <div className={'content'}>
           <ProfileInfo/>
            <MyPosts posts={props.posts} dispatch={props.dispatch} newText={props.newText}/>

        </div>
    );
}

export default Profile;