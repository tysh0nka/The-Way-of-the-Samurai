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
}

type InitialStateType = typeof initialState

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SEND-MESSAGE": {
            let newState = {...state}
            newState.messages = [...state.messages]
            newState.dialogs = [...state.dialogs]
            let newMessage = {
                id: Date.now(),
                message: action.newMessage,
            }
            newState.messages.push(newMessage);
            return newState
        }
        default:
            return state
    }
}

type SendMessageActionType = ReturnType<typeof SendActionCreate>

type NewMessageActionType = ReturnType<typeof NewMessageTextActionCreate>

type ActionType = SendMessageActionType | NewMessageActionType

export const SendActionCreate = (newMessage: string) => {
    return {type: 'SEND-MESSAGE', newMessage} as const
}

export const NewMessageTextActionCreate = (text: string) => {
    return {
        type: 'NEW-MESSAGE',
        newMessageText: text
    } as const
}
