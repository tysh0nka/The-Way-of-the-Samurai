import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./../Dialogs.module.css";
import {DialogType} from "../../../redux/state";



function DialogItem (props: DialogType) {
    return (
        <div >
            <NavLink to={'dialogs/' + props.id} className={({isActive})=> isActive ? s.dialog : ''} >{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
