import {ActionType, ProfilePageType} from "./state";

export type AddPostActionType = ReturnType<typeof AddActionCreate>

export type NewPostTextActionType = ReturnType<typeof NewPostTextActionCreate>

export const  profileReducer = (state: ProfilePageType, action: ActionType ) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state
        case 'NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state
        default: return state
    }
}

export const AddActionCreate = () => {
    return {type: "ADD-POST"} as const
}

export const NewPostTextActionCreate = (text: string) => {
    return {type: 'NEW-POST-TEXT',
        newText : text} as const
}

