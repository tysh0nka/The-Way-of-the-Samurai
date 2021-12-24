export type MessageType = {
    id: number,
    message: string,
}
export type DialogType = {
    name: string,
    id: number,
}


const initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: '!'},
    ] as Array<MessageType>,
    dialogs: [
        {id: 1, name: 'Dim'},
        {id: 2, name: 'Anton'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Oleg'},
        {id: 5, name: 'Andrey'},
    ] as Array<DialogType>,
    newMessage: '',
}

type InitialStateType = typeof initialState

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
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
        default:
            return state
    }
}

type SendMessageActionType = ReturnType<typeof SendActionCreate>

type NewMessageActionType = ReturnType<typeof NewMessageTextActionCreate>

type ActionType = SendMessageActionType | NewMessageActionType

export const SendActionCreate = () => {
    return {type: 'SEND-MESSAGE'} as const
}

export const NewMessageTextActionCreate = (text: string) => {
    return {
        type: 'NEW-MESSAGE',
        newMessageText: text
    } as const
}
