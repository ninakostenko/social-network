import React from 'react';
import cl from "./Header.module.css"
import {NavLink} from "react-router-dom";

export type HeaderPropsType = {
    isAuth: boolean,
    login: string | null
    logout: () => void
}

const Header:React.FC<HeaderPropsType> = ({isAuth, login, logout, ...props}) => {
    return (
        <header className={cl.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Nissan_logo.png" alt=""/>
            <div className={cl.loginBlock}>
                {isAuth
                    ?
                    <div>
                        {login}
                        <button onClick={logout} className={"btn"}>Log out</button>
                    </div>
                    :
                    <NavLink to='/login'>Login</NavLink>
                }

            </div>
        </header>

    );
};

export default Header;