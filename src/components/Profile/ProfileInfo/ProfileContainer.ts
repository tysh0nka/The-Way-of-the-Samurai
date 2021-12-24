import {connect} from "react-redux";
import ProfileComponent from "../ProfileComponent";
import {Dispatch} from "redux";
import {ProfileType, setUserProfile} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/reduxStore";

type MapStateToPropsType = {
    profile: ProfileType
}

type MapDispatchToPropsType = {
    setProfile: (profile: ProfileType) => void
}
export type ProfilePropsType = MapDispatchToPropsType & MapStateToPropsType

function mapStateToProps (state: AppStateType): MapStateToPropsType {
    return {
        profile: state.profilePage.profile
    };
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setProfile: (profile: ProfileType) => {
            dispatch(setUserProfile(profile))
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileComponent)

export default ProfileContainer
