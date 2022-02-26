import {connect} from "react-redux";
import ProfileComponent from "./ProfileComponent";
import {Dispatch} from "redux";
import {getStatusTC, ProfileType, setUserProfileTC} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/reduxStore";

type MapStateToPropsType = {
    profile: ProfileType
    status: string
}

type MapDispatchToPropsType = {
    setProfile: (id: string) => void
    getStatus: (id: string) => void
}
export type ProfilePropsType = MapDispatchToPropsType & MapStateToPropsType

function mapStateToProps (state: AppStateType): MapStateToPropsType {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    };
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setProfile: (id: string) => {
            // @ts-ignore
            dispatch(setUserProfileTC(id))
        },
        getStatus: (id: string) => {
            // @ts-ignore
            dispatch(getStatusTC(id))
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileComponent)

export default ProfileContainer
