import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../common/formsControl/FormsControl";
import {maxLengthCreator, required} from "../../../validte/Validate";

const maxlength30 = maxLengthCreator(30)

const AddMessageForm = (props: any) => {
    const { handleSubmit } = props
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field type="text"
                       placeholder={"add message"}
                       name={'messageForm'}
                       component={Textarea}
                       validate={[required, maxlength30]}
                />
            </div>
            <div>
                <button className="btn" type="submit">Send</button>
            </div>
        </form>
    );
};

export default reduxForm({form: 'dialogAddForm'})(AddMessageForm)