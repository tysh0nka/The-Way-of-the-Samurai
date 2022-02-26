import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean,
}

function LoginForm(props: InjectedFormProps<FormDataType>) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={"login"} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={"password"} component={'input'}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={'input'}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

export const ReduxLoginForm = reduxForm<FormDataType>({
    form: 'Login'
})(LoginForm)

export default LoginForm;