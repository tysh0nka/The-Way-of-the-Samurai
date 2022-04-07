import React from 'react';
import LoginForm from "./LoginForm";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {useNavigate} from "react-router-dom";
import {AuthType} from "../../redux/authReducer";

function Login() {

    const navigate = useNavigate()

    const auth = useSelector<AppStateType, AuthType>(state => state.auth)

    if(auth.isAuth) {
        navigate(`/profile/${auth.id}`)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    );
}

export default Login;