import React from 'react';
import '../../App.css';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import {authType} from "../../redux/authReducer";


type PropsType = {
    state: authType
}
function Header (props: PropsType) {

    return (
    <div className={style.header}>
    <img src='https://sun9-74.userapi.com/impf/vY3yGE7Hy0hw9SOYAK-lAO_QzPucOcj84KJZ9g/KTzkL7tGX0c.jpg?size=604x603&quality=96&sign=743294a6ad837074f81fb2fb3ebfedb3&type=album' alt={''}/>
        <div className={style.loginBlock}>
            {props.state.isAuth? <NavLink to={`/profile/${props.state.id}`}>{props.state.login}</NavLink>: <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </div>
);
}

export default Header;