import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {newPostText, state, StateType, subscriber} from "./redux/state";
import {addPost} from "./redux/state";

export const renderThree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} newPostText={newPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderThree(state);

subscriber(renderThree);


reportWebVitals();
