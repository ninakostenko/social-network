import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/formsControl/FormsControl";
import {required} from "../../validte/Validate";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {login} from "../../redux/auth-reducer";
import cl from '../../components/common/formsControl/FormsControl.module.css'


const LoginForm = ({handleSubmit, error, captchaUrl }: any) => {

    return (
        <form action="" onSubmit={handleSubmit}>
            {/*<div>*/}
            {/*    <Field type="text"*/}
            {/*           placeholder={"email"}*/}
            {/*           name={'email'}*/}
            {/*           component={Input}*/}
            {/*           validate={[required]}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <Field type="password"*/}
            {/*           placeholder={"Password"}*/}
            {/*           name={'password'}*/}
            {/*           component={Input}*/}
            {/*           validate={[required]}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <Field component={'input'}*/}
            {/*           name={'rememberMe'}*/}
            {/*           type="checkbox"/>*/}
            {/*    remember me*/}
            {/*</div>*/}

            {/*  або =   */}

            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type: "password"})}
            {createField(null, "rememberMe", [], Input,{type: "checkbox"}, "rememberMe")}

            { captchaUrl && <img src={captchaUrl} alt={'captcha'}/> }
            { captchaUrl &&  createField("Symbols from image", "captcha", [required], Input, {} )}
            { error && <div className={cl.formError}>{error}</div> }

            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
    // a unique name for the form

// type  ComponentProps = {
//     onSubmit: (formData: any) => void;
//     captchaUrl: string | null,
//     login: null | string | number,
//     isAuth: boolean
// }


const Login  = (props: any) => {
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Navigate to={'profile'} />
    }

    return (
        <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    );
};
const mapStateToProps = (state: any) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);

