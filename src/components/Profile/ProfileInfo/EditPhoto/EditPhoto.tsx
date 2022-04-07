import React from 'react';
import s from './EditPhoto.module.css'
import {changePhoto} from "../../../../redux/api/api";


function EditPhoto() {

    const editPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const photo = e.target.files[0]
            console.log(photo)
            changePhoto(e.target.files[0])
        }
    }

    return (
        <div className={s.editPhoto}>
            <label>
                <span>Edit Photo</span>
                <input type={'file'} onChange={e => editPhoto(e)} name={'Edit Photo'}/>
            </label>
        </div>
    );
}

export default EditPhoto;