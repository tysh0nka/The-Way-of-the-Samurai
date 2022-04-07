import React from 'react';
import '../App.css';
import Nav from "./Nav/Nav";
import AppRoutes from "./AppRoutes/AppRoutes";
import Header from "./Header/Header";


function App() {

    return (
        <div className="App">
            <Header/>
            <div className='container'>
                <Nav/>
                <AppRoutes/>
            </div>
        </div>);
}

export default App;
