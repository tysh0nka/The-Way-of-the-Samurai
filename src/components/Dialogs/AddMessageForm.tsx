import React from 'react';
import s from "./Dialogs.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type AddMessageFormType = {
    addMessage: string
}

function AddMessageForm(props: InjectedFormProps<AddMessageFormType>) {
    return (
        <form className={s.newMessage} onSubmit={props.handleSubmit}>
            <Field name={'addMessage'} component={'textarea'}>New message</Field>
            <button >Send</button>
        </form>
    );
}

export const AddMessage = reduxForm<AddMessageFormType>({
    form: 'Message'
})(AddMessageForm)