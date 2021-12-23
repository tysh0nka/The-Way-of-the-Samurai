import {ActionType, DialogsPageType} from "./state";

export type SendMessageActionType = ReturnType<typeof SendActionCreate>

export type NewMessageActionType = ReturnType<typeof NewMessageTextActionCreate>

export const  dialogsReducer = (state: DialogsPageType, action: ActionType ) => {
    switch (action.type) {
        case "NEW-MESSAGE":
            state.newMessage = action.newMessageText;
            return state
        case "SEND-MESSAGE":
            const newMessage = {
                id: 6,
                message: state.newMessage,
            }
            state.messages.push(newMessage);
            state.newMessage = '';
            return state
        default: return state
    }
}

export const SendActionCreate = () => {
    return {type: 'SEND-MESSAGE'} as const
}

export const NewMessageTextActionCreate = (text: string) => {
    return {type: 'NEW-MESSAGE',
        newMessageText : text} as const
}
