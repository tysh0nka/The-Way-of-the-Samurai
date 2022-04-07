import React from 'react';
import EditableSpan from "../../../commons/EditableSpan/EditableSpan";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {changeStatusTC} from "../../../redux/profileReducer";
import style from './../Profile.module.css'
import {useParams} from "react-router-dom";

function ProfileStatus() {

    const myId = useSelector<AppStateType, number | null>(state => state.auth.id)

    const params = useParams()
    const userId = params.id
    const status = useSelector<AppStateType, string>(state => state.profilePage.status)
    const dispatch = useDispatch()

    const removeTaskStatus = (title: string) => {
        dispatch(changeStatusTC(title))
    }

    // @ts-ignore
    if (+userId !== myId) {
        return (
            <div className={style.status}>
                <span>{status}</span>
            </div>
        )
    } else {
        return (
            <div className={style.status}>
                <EditableSpan value={status} onChange={removeTaskStatus}/>
            </div>
        );
    }
}

export default ProfileStatus;