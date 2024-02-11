import React from 'react';
import {createField, Input, Textarea} from "../../common/formsControl/FormsControl";
import {reduxForm} from "redux-form";
import Contacts from "./Contacts";
import cl from "../../common/formsControl/FormsControl.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}: any) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>save</button>
            </div>
            {
                error && <div className={cl.formError}>{error}</div>
            }

            <div>
                <b>Full Name</b>: {createField("Full name", "fullName", [], Input)}
            </div>
            <div>
                <b>Looking for a job</b>: {createField("", "lookingForAJob", [], Input, {type: '"checkbox'})}
            </div>
            <div>
                <b>My professional skills</b>:
                {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
            </div>

            <div>
                <b>About me</b>:
                {createField("About me", "aboutMe", [], Textarea)}
            </div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map((key: string) => {
            return <div key={key}>
                <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
            </div>
        })}
        </form>
    )
}
const ProfileDataFormReduxForm = reduxForm({form: "edit-profile"})(ProfileDataForm)
export default ProfileDataFormReduxForm;

// export  default ProfileDataForm