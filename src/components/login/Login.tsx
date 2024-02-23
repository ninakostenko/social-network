import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/formsControl/FormsControl";
import {required} from "../../validte/Validate";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {login} from "../../redux/auth-reducer";
import cl from '../../components/common/formsControl/FormsControl.module.css'
import {AppStateType} from "../../redux/redux-store";

type LoginFormOwnPropsType = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnPropsType> & LoginFormOwnPropsType> = ({handleSubmit, error, captchaUrl}) => {

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
            {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "rememberMe")}

            {captchaUrl && <img src={captchaUrl} alt={'captcha'}/>}
            {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}
            {error && <div className={cl.formError}>{error}</div>}

            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnPropsType>({form: 'login'})(LoginForm)
// a unique name for the form

type MapStatePropsType = {
    captchaUrl: string | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}
type LoginFormValuesType = {
    captcha: string
    rememberMe: boolean
    password: string
    email: string

}


const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Navigate to={'profile'}/>
    }

    return (
        <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    );
};
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);

