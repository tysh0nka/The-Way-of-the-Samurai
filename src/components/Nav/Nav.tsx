import React from 'react';
import '../../App.css';
import style from './Nav.module.css';
import {NavLink} from "react-router-dom";


function Nav () {

    return (
        <div className={style.nav}>
            <div>
                <NavLink to={'/profile'} >Profile</NavLink>
            </div>
            <div>
                <NavLink to={'/dialogs'} >Messages</NavLink>
            </div>
            <div>
                <NavLink to={'/news'} >News</NavLink>
            </div>
            <div>
                <NavLink to={'/music'} >Music</NavLink>
            </div>
            <div>
                <NavLink to={'/settings'} >Settings</NavLink>
            </div>
            <div>
                <NavLink to={'/users'}>Users</NavLink>
            </div>
        </div>
    );
}

export default Nav;