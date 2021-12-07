import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/state";


export const renderThree = () => {
    ReactDOM.render(<App state={store.getState()} dispatch={store.dispatch.bind(store)}/>, document.getElementById('root'));
}

renderThree();

store.subscriber(renderThree);


reportWebVitals();
