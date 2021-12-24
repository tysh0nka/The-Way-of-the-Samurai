import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";

function Dialogs (props : DialogsPropsType) {
    const dialogElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    const messagesElements = props.dialogsPage.messages.map( m => <Message id={m.id} message={m.message} />)

    const newMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value;
        props.newMessageText(text)
    }
    const sendMessage = () => {
        props.sendMessage()
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.newMessage}>
                <textarea value={props.dialogsPage.newMessage} onChange={newMessageText}>New message</textarea>
                <button onClick={sendMessage}>Send</button>
            </div>

        </div>
    );
}

export default Dialogs;