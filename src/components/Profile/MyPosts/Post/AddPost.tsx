import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {AddActionCreate} from "../../../../redux/profileReducer";


function AddPost() {

    const [post, setPost] = useState('')
    const dispatch = useDispatch()

    const changePost = (e: React.ChangeEvent<HTMLTextAreaElement>) => setPost(e.currentTarget.value)
    const addPost = () => dispatch(AddActionCreate(post))

    return (
        <div style={{width: '700px'}}>
            <textarea style={{resize: 'none', width: '500px', height: '30px', borderRadius: '4px'}}
                      placeholder={'New post'}
                      value={post}
                      onChange={changePost}> </textarea>
            <button
                style={{width: '60px', position: 'absolute', marginTop: '40px', height: '35px', borderRadius: '4px'}}
                onClick={addPost}>Add post
            </button>
        </div>
    );
}

export default AddPost