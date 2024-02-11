import React from 'react';
import cl from "../Dialogs.module.css";

export type MessagePropsType = {
    message: string
    id: number
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={cl.message}>{props.message}</div>
    );
};

export default Message;