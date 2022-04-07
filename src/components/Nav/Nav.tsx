import React from 'react';
import '../../App.css';
import style from './Nav.module.css';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";


function Nav() {

    const id = useSelector<AppStateType, number | null>(state => state.auth.id)

    return (
        <div className={style.nav}>
            <div className={style.navBlock}>
                <div>
                    <NavLink to={`/profile/${id}`}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to={'/dialogs'}>Messages</NavLink>
                </div>
                <div>
                    <NavLink to={'/news'}>News</NavLink>
                </div>
                <div>
                    <NavLink to={'/music'}>Music</NavLink>
                </div>
                <div>
                    <NavLink to={'/settings'}>Settings</NavLink>
                </div>
                <div>
                    <NavLink to={'/users'}>Users</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Nav;