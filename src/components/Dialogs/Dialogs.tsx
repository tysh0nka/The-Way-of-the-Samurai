import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogType = {
    dialogName : string,
    id : number,
}

type MessageType = {
    message : string,
}

function DialogItem (props: DialogType) {
    return (
        <div  className={s.dialog}>
            <NavLink to={'dialogs/' + props.id} >{props.dialogName}</NavLink>
        </div>
    )
}

function Message (props: MessageType) {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

function Dialogs () {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem dialogName={'Dima'}  id={1}/>
                <DialogItem dialogName={'Anton'}  id={2} />
                <DialogItem dialogName={'Alex'}  id={3} />
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How are you?'}/>
                <Message message={'Yo'}/>
            </div>

        </div>
    );
}

export default Dialogs;