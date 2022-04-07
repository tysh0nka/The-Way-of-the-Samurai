import React from 'react';
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {loginTC} from "../../redux/authReducer";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

function LoginForm() {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required'
            } else if (values.password.length < 4) {
                errors.password = 'Invalid password'
            }
            return errors;
        },
        onSubmit: values => {
            const {email, password, rememberMe} = values
            dispatch(loginTC(email, password, rememberMe))
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input placeholder={'Login'}
                       name={'email'} value={formik.values.email}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}/>
                {formik.touched.email &&
                    formik.errors.email && <div style={{color: 'red'}}>{formik.errors.email}</div>}
            </div>
            <div>
                <input placeholder={'Password'}
                       type="password"
                       name={'password'}
                       value={formik.values.password}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}/>
                {formik.touched.password &&
                    formik.errors.password && <div style={{color: 'red'}}>{formik.errors.password}</div>}
            </div>
            <div>
                <input type={"checkbox"}
                       name={'rememberMe'}
                       checked={formik.values.rememberMe}
                       onChange={formik.handleChange}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

export default LoginForm;