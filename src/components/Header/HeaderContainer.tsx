import React, {useEffect} from 'react';
import Header from "./Header";
import {useDispatch, useSelector} from "react-redux";

import {authType, setUserData, setUserDataTC} from "../../redux/authReducer";
import axios from "axios";
import {AppStateType} from "../../redux/reduxStore";
import {authApi} from "../../redux/api/api";

function HeaderContainer() {
    const dispatch = useDispatch()
    const state = useSelector<AppStateType, authType>(state => state.auth)
    useEffect(()=> {
        dispatch(setUserDataTC())
    }, [])
    return (
        <>
            <Header state={state}/>
        </>
    );
}

export default HeaderContainer;