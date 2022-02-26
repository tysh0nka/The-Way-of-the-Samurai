
import {DialogType, MessageType, NewMessageTextActionCreate, SendActionCreate} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/reduxStore";
import {AuthRedirect} from "../../hoc/authRedirect";


type DialogsPageType = {
    messages: Array<MessageType>,
    dialogs: Array<DialogType>,
}

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}

type MapDispatchToPropsType = {
    sendMessage: (message: string) => void
}

export type DialogsPropsType = MapDispatchToPropsType & MapStateToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType  => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
     sendMessage: (message) => {
         dispatch(SendActionCreate(message))
     }

  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default AuthRedirect(DialogsContainer);