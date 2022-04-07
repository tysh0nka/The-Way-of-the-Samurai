import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {useNavigate} from "react-router-dom";
import AddMessage from "./AddMessage";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {DialogType, MessageType} from "../../redux/dialogsReducer";


function Dialogs() {

    const navigate = useNavigate()

    const dialogElements = useSelector<AppStateType, Array<DialogType>>(state => state.dialogsPage.dialogs)
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    const messagesElements = useSelector<AppStateType, Array<MessageType>>(state => state.dialogsPage.messages)
        .map(m => <Message id={m.id} message={m.message}/>)
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)

    if (!isAuth) {
        navigate('/login')
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddMessage/>

        </div>
    );
}

export default Dialogs;