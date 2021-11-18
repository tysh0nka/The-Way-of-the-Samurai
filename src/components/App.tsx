import React from 'react';
import '../App.css';
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";


function App() {
    // @ts-ignore
    // @ts-ignore
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Nav/>
                <div className={'content'}>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <Routes>
                        <Route path={'/dialogs'} element={<Dialogs/>}/>
                        <Route path={'/profile'} element={<Profile/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                        <Route path={'/dialogs/*'} element={<Dialogs/>}/>
                    </Routes>
                </div>
            </div>

        </BrowserRouter>);
}

export default App;
