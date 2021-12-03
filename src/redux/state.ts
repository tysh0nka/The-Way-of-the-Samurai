


export type MessageType = {
    id : number,
    message : string,
}
export type DialogType = {
    name : string,
    id : number,
}
export type PostType = {
    id : number;
    message : string;
    likesCount : number;
}
export type ProfilePageType = {
    posts : Array<PostType>,
    newPostText : string
}
export type DialogsPageType = {
    messages : Array<MessageType>,
    dialogs : Array<DialogType>,
}
export type StateType = {
    profilePage : ProfilePageType,
    dialogsPage : DialogsPageType,
}


export const state: StateType = {
    profilePage : {
        posts : [
            {id: 1, message: 'Hello', likesCount: 1 },
            {id: 2, message: 'Hi', likesCount: 5 },
            {id: 3, message: 'one', likesCount: 3 },
            {id: 4, message: 'two', likesCount: 6 },
            {id: 5, message: 'three', likesCount: 7 },
        ],
    newPostText: ''},
    dialogsPage : {
        messages : [
            {id:1, message : 'Hi'},
            {id:2, message : 'How are you?'},
            {id:3, message : 'Yo'},
            {id:4, message : '!'},
        ],
        dialogs : [
            {id:1, name: 'Dim'},
            {id:2, name: 'Anton'},
            {id:3, name: 'Alex'},
            {id:4, name: 'Oleg'},
            {id:5, name: 'Andrey'},
        ],}

}

export const addPost = () => {
    const newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderThree(state);

}

export const newPostText = (newText: string) => {
    debugger;
    state.profilePage.newPostText = newText;
    renderThree(state);
}


// eslint-disable-next-line @typescript-eslint/no-redeclare
let renderThree: (state: StateType) => void = () => {};

export const subscriber = (observe : (state: StateType) => void) => {
    renderThree = observe;
}