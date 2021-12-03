import React from 'react';
import s from "./../Dialogs.module.css";
import {MessageType} from "../../../redux/state";


function Message(props: MessageType) {

    return (
        <div>
                <div className={s.message}>
                    {props.message}
                </div>

        </div>
    )
}

export default Message;