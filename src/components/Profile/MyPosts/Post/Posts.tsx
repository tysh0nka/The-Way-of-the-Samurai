import React from 'react';
import style from './Posts.module.css'
import {PostType} from "../../../../redux/profileReducer";



function Posts (props: PostType)  {
    return (
        <div>
            <div>
                <img className={style.imgPost} src={'https://vraki.net/sites/default/files/inline/images/1_42.jpg'} alt={''}/>
                {props.message}
            </div>
            <div>
                <span>Likes {props.likesCount}</span>
            </div>
        </div>
    );
}

export default Posts;