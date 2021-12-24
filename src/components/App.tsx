import React from 'react';
import '../App.css';
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Profile from "./Profile/Profile";
import {Route, Routes} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import DialogsContainer from "./Dialogs/DialogsContainer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Nav/>
            <Routes>
                <Route path={'/dialogs '} element={<DialogsContainer/>}/>
                <Route path={'/profile'} element={<Profile />}/>
                <Route path={'/news'} element={<News/>}/>
                <Route path={'/music'} element={<Music/>}/>
                <Route path={'/settings'} element={<Settings/>}/>
                <Route path={'/dialogs/*'} element={<DialogsContainer/>}/>
                <Route path={'/'} element={<Profile/>}/>
            </Routes>
        </div>);
}

export default App;
