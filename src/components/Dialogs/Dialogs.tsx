import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionType, DialogType, MessageType} from "../../redux/state";
import {NewMessageTextActionCreate, SendActionCreate} from "../../redux/dialogsReducer";


export type DialogsType = {
    dialogs : Array<DialogType>,
    messages : Array<MessageType>,
    dispatch: (action: ActionType) => void
    newMessage: string
}

function Dialogs (props : DialogsType) {

    const dialogElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    const messagesElements = props.messages.map( m => <Message id={m.id} message={m.message} />)

    const newMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value;
        props.dispatch(NewMessageTextActionCreate(text))
    }
    const sendMessage = () => {
        props.dispatch(SendActionCreate())
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
                <textarea value={props.newMessage} onChange={newMessageText}>New message</textarea>
                <button onClick={sendMessage}>Send</button>
            </div>

        </div>
    );
}

export default Dialogs;