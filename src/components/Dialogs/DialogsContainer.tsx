
import {DialogType, MessageType, NewMessageTextActionCreate, SendActionCreate} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/reduxStore";


type DialogsPageType = {
    messages: Array<MessageType>,
    dialogs: Array<DialogType>,
    newMessage: string
}

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchToPropsType = {
    newMessageText: (text: string) => void
    sendMessage: () => void
}

export type DialogsPropsType = MapDispatchToPropsType & MapStateToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType  => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
      newMessageText: (text: string) => {
         dispatch(NewMessageTextActionCreate(text))
     },
     sendMessage: () => {
         dispatch(SendActionCreate())
     }

  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;