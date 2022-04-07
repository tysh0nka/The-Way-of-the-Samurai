import React, {useEffect} from 'react';
import '../../App.css';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AuthType, logoutTC, setUserDataTC} from "../../redux/authReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";

function Header() {

    const dispatch = useDispatch()
    const state = useSelector<AppStateType, AuthType>(state => state.auth)

    const logo = 'https://i.pinimg.com/originals/c2/2d/37/c22d37071d21781a60633b7509a15dfc.png'
    const isAuth = state.isAuth
    const logOut = () => dispatch(logoutTC())

    useEffect(() => {
        dispatch(setUserDataTC())
    }, [])

    return (
        <div className={style.header}>
            <div className={style.headerContainer}>
                <img src={logo} alt={''}/>
                <div className={style.loginBlock}>
                    {isAuth ? <NavLink to={`/profile/${state.id}`}>{state.login}</NavLink> :
                        <NavLink to={'/login'}>Login</NavLink>}
                </div>
                <div className={style.logout}>
                    {isAuth && <button onClick={logOut}>Log Out</button>}
                </div>
            </div>
        </div>
    );
}

export default Header;