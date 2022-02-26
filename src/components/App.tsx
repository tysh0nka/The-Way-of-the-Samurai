import React from 'react';
import '../App.css';

import {Route, Routes} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import DialogsContainer from "./Dialogs/DialogsContainer";

import UsersContainer from "./Users/UsersContainer";
import Nav from "./Nav/Nav";

import ProfileContainer from "./Profile/ProfileContainer";
import HeaderContainer from "./Header/HeaderContainer";
import Login from "./Login/Login";


function App() {

    return (
        <div className="App">
            <HeaderContainer/>
            <Nav/>
            <Routes>
                <Route path={'/dialogs '} element={<DialogsContainer/>}/>
                <Route path={'/profile/:id'} element={<ProfileContainer />}/>
                <Route path={'/news'} element={<News/>}/>
                <Route path={'/music'} element={<Music/>}/>
                <Route path={'/settings'} element={<Settings/>}/>
                <Route path={'/dialogs/*'} element={<DialogsContainer/>}/>
                <Route path={'/'} element={<ProfileContainer/>}/>
                <Route path={'/users'} element={<UsersContainer/>}/>
                <Route path={'/login'} element={<Login/>}/>
            </Routes>
        </div>);
}

export default App;
