import React from 'react';
import style from './Posts.module.css'
import {PostType} from "../../../../redux/profileReducer";


function Posts({message}: PostType) {

    return (
        <div className={style.postBlock}>
            <div className={style.imgPost}>
                <img src={'https://i.vimeocdn.com/portrait/39345265_640x640'} alt={''}/>
            </div>
            <div className={style.message}>
                <p>{message}</p>
            </div>
        </div>
    );
}

export default Posts;