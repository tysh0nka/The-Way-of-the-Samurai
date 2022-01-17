import React from 'react';
import style from "../Profile.module.css";
import {ProfileType} from "../../../redux/profileReducer";
import loader from '../../Users/loader.svg'

type PropsType = {
    profile: ProfileType
}

const ProfileInfo = (props: PropsType) => {

    if (!props.profile.photos) {
        return <img src={loader} alt={''}/>
    }
    return (
        <div>
            <div>
                <img className={style.imgContent1} src={'https://sun9-32.userapi.com/c855736/v855736078/166f5e/x6s5z_vYADM.jpg'} alt={''}/>
            </div>
            <div>
                <img className={style.imgContent2} src={props.profile.photos.large && 'https://i.vimeocdn.com/portrait/39345265_640x640'} alt={''}/>
            </div>
            <div>
                Name: {props.profile.fullName}
            </div>
        </div>
    );
};

export default ProfileInfo;