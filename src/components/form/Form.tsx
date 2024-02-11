import React from 'react';
import {Field, reduxForm} from "redux-form";


const AddMessageForm = (props: any) => {

    const { handleSubmit } = props
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder={"add message"} name={'message'} component={'textarea'}/>
            </div>
            <div>
                <button className="btn" type="submit">Send</button>
            </div>
        </form>
    );
};

const MessageReduxForm = reduxForm({form: 'dialogAddForm'})(AddMessageForm)


const FormMessage = (props: any) => {
    const addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    }
    return (
        <div>
            <MessageReduxForm onSubmit={addNewMessage}/>
        </div>
    );
};

export default FormMessage;