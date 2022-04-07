import React from 'react';
import {Route, Routes} from "react-router-dom";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";
import UsersContainer from "../Users/UsersContainer";
import Login from "../Login/Login";
import style from "./AppRoutes.module.css"
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";

function AppRoutes() {

    return (
        <div className={style.main}>
            <Routes>
                <Route path={'/dialogs '} element={<Dialogs/>}/>
                <Route path={'/profile/:id'} element={<Profile/>}/>
                <Route path={'/profile/null'} element={<Login/>}/>
                <Route path={'/news'} element={<News/>}/>
                <Route path={'/music'} element={<Music/>}/>
                <Route path={'/settings'} element={<Settings/>}/>
                <Route path={'/dialogs/*'} element={<Dialogs/>}/>
                <Route path={'/'} element={<Profile/>}/>
                <Route path={'/users'} element={<UsersContainer/>}/>
                <Route path={'/login'} element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default AppRoutes;