import MyPosts from "./MyPosts";
import {AddActionCreate, PostType} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import {Dispatch} from "redux";

type ProfilePageType = {
    posts: Array<PostType>,
}
type MapStateToProps = {
    profilePage: ProfilePageType
}
type MapDispatchToProps = {
    addPost: (newPost: string) => void
}
export type MyPostPropsType = MapDispatchToProps & MapStateToProps

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        addPost: (newPost: string) => {
            dispatch(AddActionCreate(newPost))
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;