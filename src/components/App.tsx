import React from 'react';
import '../App.css';
import Header from "./Header/Header";

import {Route, Routes} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import DialogsContainer from "./Dialogs/DialogsContainer";

import UsersContainer from "./Users/UsersContainer";
import Nav from "./Nav/Nav";

import ProfileContainer from "./Profile/ProfileInfo/ProfileContainer";


function App() {
    return (
        <div className="App">
            <Header/>
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
            </Routes>
        </div>);
}

export default App;
