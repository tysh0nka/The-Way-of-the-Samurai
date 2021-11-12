import React from 'react';
import '../App.css';
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Profile from "./Profile/Profile";


function App() {
    return (
        <div className="App">
            <Header/>
            <Nav/>
            <Profile/>
        </div>
    );
}

export default App;
