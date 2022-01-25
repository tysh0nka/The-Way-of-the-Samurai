import {connect} from "react-redux";
import ProfileComponent from "../ProfileComponent";
import {Dispatch} from "redux";
import {ProfileType, setUserProfile, setUserProfileTC} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/reduxStore";

type MapStateToPropsType = {
    profile: ProfileType
}

type MapDispatchToPropsType = {
    setProfile: (id: string) => void
}
export type ProfilePropsType = MapDispatchToPropsType & MapStateToPropsType

function mapStateToProps (state: AppStateType): MapStateToPropsType {
    return {
        profile: state.profilePage.profile
    };
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setProfile: (id: string) => {
            // @ts-ignore
            dispatch(setUserProfileTC(id))
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileComponent)

export default ProfileContainer
