import React from 'react';
import cl from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props: any) => {
    return (
        <header className={cl.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Nissan_logo.png" alt=""/>
            <div className={cl.loginBlock}>
                {props.isAuth
                    ?
                    <div>
                        {props.login}
                        <button onClick={props.logout} className={"btn"}>Log out</button>
                    </div>
                    :
                    <NavLink to='/login'>Login</NavLink>
                }

            </div>
        </header>

    );
};

export default Header;