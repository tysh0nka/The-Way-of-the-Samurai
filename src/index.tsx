import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/reduxStore";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";



export const renderThree = () => {ReactDOM.render(
    <BrowserRouter>
       <Provider store={store}>
           <App  />
       </Provider>
    </BrowserRouter>,
    document.getElementById('root'));
}

renderThree();

store.subscribe(renderThree);


reportWebVitals();
