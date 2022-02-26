import React, {useEffect, useState} from 'react';
import EditableSpan from "../../../commons/EditableSpan/EditableSpan";
import {changeStatus, getStatus} from "../../../redux/api/api";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import {changeStatusTC, ProfileType} from "../../../redux/profileReducer";
import {ProfilePropsType} from "../ProfileContainer";



function ProfileStatus(props: ProfilePropsType ) {

    const myId = useSelector<AppStateType, number| null>(state => state.auth.id)
    const userId = props.profile.userId
    const dispatch = useDispatch()

    const removeTaskStatus = (title: string) => {
        dispatch(changeStatusTC(title))
    }

    if(+userId !== myId) {
        return (
            <span>{props.status}</span>
        )
    }
    return (
        <>
            <EditableSpan value={props.status} onChange={removeTaskStatus}/>
        </>
    );
}

export default ProfileStatus;