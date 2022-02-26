import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    value: string
    onChange: (title: string) => void
}

function EditableSpan(props: PropsType) {



    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState<string>(props.value );

    // if (props.value === null) {
    //     return setTitle('Статус отсутствует')
    // } else {
    //     return setTitle(props.value)
    // }

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        props.onChange(title);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode
        ? <input value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode}/>
        : <span onDoubleClick={activateEditMode}>{props.value}</span>
}

export default EditableSpan;