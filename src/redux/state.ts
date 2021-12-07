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
    _addPost: () => void
    _newPostText: (newText: string) => void
    dispatch: (action: ActionType) => void

}

type AddPostActionType = ReturnType<typeof AddActionCreate>

type NewPostTextActionType = ReturnType<typeof NewPostTextActionCreate>

export type ActionType = AddPostActionType|NewPostTextActionType

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
        if (action.type === 'ADD-POST'){
            this._addPost()
        } else if (action.type === 'NEW-POST-TEXT') {
            this._newPostText(action.newText)
        }
    },
    _addPost() {
        const newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this.renderThree();
    },
    _newPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this.renderThree();
    },

}

export const AddActionCreate = () => {
  return {type: "ADD-POST"} as const
}

export const NewPostTextActionCreate = (text: string) => {
    return {type: 'NEW-POST-TEXT',
        newText : text} as const
}