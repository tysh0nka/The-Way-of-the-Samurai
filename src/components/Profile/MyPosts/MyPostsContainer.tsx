import MyPosts from "./MyPosts";
import {AddActionCreate, NewPostTextActionCreate, PostType} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import {Dispatch} from "redux";

type ProfilePageType = {
    posts: Array<PostType>,
    newPostText: string
}
type MapStateToProps = {
    profilePage: ProfilePageType
}
type MapDispatchToProps = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}
export type MyPostPropsType = MapDispatchToProps & MapStateToProps

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(NewPostTextActionCreate(text))
        },
        addPost: () => {
            dispatch(AddActionCreate())
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;