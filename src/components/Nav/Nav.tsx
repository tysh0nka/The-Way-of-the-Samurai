import React from 'react';
import '../../App.css';
import style from './Nav.module.css';

function Nav () {
    return (
        <div className={style.nav}>
            <div>
                <a href={'google.com'}>Profile</a>
            </div>
            <div>
                <a href={'google.com'}>Messages</a>
            </div>
            <div>
                <a href={'google.com'}>News</a>
            </div>
            <div>
                <a href={'google.com'}>Music</a>
            </div>
            <div>
                <a href={'google.com'}>Settings</a>
            </div>
        </div>
    );
}

export default Nav;