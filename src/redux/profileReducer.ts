export type PostType = {
    id: number;
    message: string;
    likesCount: number;
}

const initialState = {
    posts: [
        {id: 1, message: 'Hello', likesCount: 1},
        {id: 2, message: 'Hi', likesCount: 5},
        {id: 3, message: 'one', likesCount: 3},
        {id: 4, message: 'two', likesCount: 6},
        {id: 5, message: 'three', likesCount: 7},
    ] as Array<PostType>,
    newPostText: '' as string
}

type InitialStateType = typeof initialState


export const  profileReducer = (state: InitialStateType = initialState, action: ActionType ): InitialStateType => {
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


type AddPostActionType = ReturnType<typeof AddActionCreate>
type NewPostTextActionType = ReturnType<typeof NewPostTextActionCreate>
type ActionType = AddPostActionType | NewPostTextActionType
export const AddActionCreate = () => {
    return {type: "ADD-POST"} as const
}

export const NewPostTextActionCreate = (text: string) => {
    return {type: 'NEW-POST-TEXT',
        newText : text} as const
}

