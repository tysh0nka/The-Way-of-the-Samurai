import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Navigate} from "react-router-dom";
import {AddMessage, AddMessageFormType} from "./AddMessageForm";


function Dialogs (props : DialogsPropsType) {

    const dialogElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    const messagesElements = props.dialogsPage.messages.map( m => <Message id={m.id} message={m.message} />)

    // const newMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     const text = e.currentTarget.value;
    //     props.newMessageText(text)
    // }


    const addNewMessage = (value: AddMessageFormType) => {
        alert(value.addMessage)
        props.sendMessage(value.addMessage)
    }

    if (!props.isAuth) {
        return <Navigate to={'/login'}/>
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddMessage onSubmit={addNewMessage}/>

        </div>
    );
}

export default Dialogs;