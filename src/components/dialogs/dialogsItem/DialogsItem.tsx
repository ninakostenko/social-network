import React from 'react';
import cl from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogsPropsType = {
    name: string
    id: number
    img: any
}

const DialogsItem = (props: DialogsPropsType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={cl.dialog}>
            <NavLink to={path}>{props.name} {props.img}</NavLink>
        </div>
    );
};

export default DialogsItem;