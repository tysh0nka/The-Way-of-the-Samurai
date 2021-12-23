import {AddPostActionType, NewPostTextActionType, profileReducer} from "./profileReducer";
import {dialogsReducer, NewMessageActionType, SendMessageActionType} from "./dialogsReducer";

export type MessageType = {
    id: number,
    message: string,
}
export type DialogType = {
    name: string,
    id: number,
}
export type PostType = {
    id: number;
    message: string;
    likesCount: number;
}
export type ProfilePageType = {
    posts: Array<PostType>,
    newPostText: string
}
export type DialogsPageType = {
    messages: Array<MessageType>,
    dialogs: Array<DialogType>,
    newMessage: string
}
export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
}
export type StorePropsType = {
    _state: StateType
    renderThree: () => void
    subscriber: (observe: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionType) => void

}

export type ActionType = AddPostActionType|NewPostTextActionType| SendMessageActionType| NewMessageActionType

export const store: StorePropsType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello', likesCount: 1},
                {id: 2, message: 'Hi', likesCount: 5},
                {id: 3, message: 'one', likesCount: 3},
                {id: 4, message: 'two', likesCount: 6},
                {id: 5, message: 'three', likesCount: 7},
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: '!'},
            ],
            dialogs: [
                {id: 1, name: 'Dim'},
                {id: 2, name: 'Anton'},
                {id: 3, name: 'Alex'},
                {id: 4, name: 'Oleg'},
                {id: 5, name: 'Andrey'},
            ],
            newMessage: '',
        }

    },
    getState() {
        return this._state
    },
    renderThree() {
    },
    subscriber(observe) {
        this.renderThree = observe;
    },
    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this.renderThree();
    },

}




