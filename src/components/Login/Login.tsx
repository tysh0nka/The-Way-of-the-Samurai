import React from 'react';
import {ReduxLoginForm} from "./LoginForm";
import {useDispatch} from "react-redux";
import {loginTC} from "../../redux/authReducer";

function Login() {
    const dispatch = useDispatch()
    const onSubmit = (formData: any) => {
        dispatch(loginTC(formData.login, formData.password, formData.rememberMe))
    }

    return (
        <div>
            <h1>Login</h1>
           <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    );
}

export default Login;