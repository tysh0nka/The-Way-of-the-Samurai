import React from 'react';
import style from './Posts.module.css'



type PropsType = {
    message : string;
    id : number;
    LikesCount : number;
};

function Posts (props: PropsType)  {
    return (
        <div>
            <div>
                <img className={style.imgPost} src={'https://vraki.net/sites/default/files/inline/images/1_42.jpg'} alt={''}/>
                {props.message}
            </div>
            <div>
                <span>Likes {props.LikesCount}</span>
            </div>
        </div>
    );
}

export default Posts;