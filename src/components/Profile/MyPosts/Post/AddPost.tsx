import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../../utils/validators/validators";

export type AddPostFormType = {
    addPostForm: string
}

const maxLength = maxLengthCreator(10)

function AddPost(props: InjectedFormProps<AddPostFormType>) {
    return (
        <form onSubmit={props.handleSubmit}>
                    <Field component={'textarea'} name={'addPostForm'} validate={[requiredField, maxLength]} placeholder={'New post'}> </Field>
                <button >Add post</button>
        </form>
    );
}

export const AddPostForm = reduxForm<AddPostFormType>({
    form: 'AddPost'
})(AddPost)