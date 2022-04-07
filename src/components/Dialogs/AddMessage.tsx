import React, {useState} from 'react';
import {SendActionCreate} from "../../redux/dialogsReducer";
import {useDispatch} from "react-redux";


function AddMessage() {

    const dispatch = useDispatch()
    const [newMessage, setNewMessage] = useState('')

    const changeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => setNewMessage(e.currentTarget.value)
    const sendMessage = ()=> dispatch(SendActionCreate(newMessage))

    return (
            <div>
                <textarea value={newMessage} onChange={changeMessage}>New message</textarea>
                <button onClick={sendMessage}>Send</button>
            </div>

    );
}

export default AddMessage