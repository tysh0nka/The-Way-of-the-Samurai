import React, {ComponentType} from 'react';
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/store";


export function AuthRedirect(Component: ComponentType) {

    const RedirectComponent = () => {
        const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
        if(!isAuth) return <Navigate to={'/login'}/>
        return <Component />
    }
    return RedirectComponent
}

