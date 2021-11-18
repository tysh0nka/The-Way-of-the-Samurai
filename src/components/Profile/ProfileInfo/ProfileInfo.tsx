import React from 'react';
import style from "../Profile.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={style.imgContent1} src={'https://sun9-32.userapi.com/c855736/v855736078/166f5e/x6s5z_vYADM.jpg'} alt={''}/>
            </div>
            <div>
                <img className={style.imgContent2} src={'https://cs8.pikabu.ru/avatars/1672/x1672551-179614235.png'} alt={''}/>
            </div>
        </div>
    );
};

export default ProfileInfo;