import React from 'react';
import cl from "./Dialogs.module.css"
import DialogsItem from "./dialogsItem/DialogsItem";
import Message from "./message/Message";
import AddMessageForm from "./message/AddMessageForm";

const Dialogs = (props: any) => {
    let state = props.messagesPage

    let dialogsElements = state.dialogsData.map((d: any) => <DialogsItem key={d.id} name={d.name} id={d.id}
                                                                         img={d.img}/>)
    let messagesElement = state.messagesData.map((m: any) => <Message key={m.id} message={m.message} id={m.id}/>)

    let newMessageBody = state.newMessageBody


    const addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
        console.log(values)
    }

    // if (props.isAuth === false) return <Navigate to={"/login"}/>= = if (!props.isAuth) return <Navigate to={"/login"}/>
    // if (!props.isAuth) return <Navigate to={"/login"}/>
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={cl.messages}>
                {messagesElement}
            </div>
            <div>
                <div className={cl.textarea}>
                    <AddMessageForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    );
};





export default Dialogs;