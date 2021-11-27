import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogType, MessageType} from "../../redux/state";


export type DialogsType = {
    dialogs : Array<DialogType>,
    messages : Array<MessageType>,
}

function Dialogs (props : DialogsType) {

    const dialogElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    const messagesElements = props.messages.map( m => <Message id={m.id} message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>

        </div>
    );
}

export default Dialogs;