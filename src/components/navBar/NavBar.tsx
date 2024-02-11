import React from 'react';
import cl from "./NavBar.module.css"
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={cl.nav}>
            <div className={cl.item}>
                <NavLink to="/profile"
                         className={({isActive}) => (isActive ? cl.activelink : cl.item)}>Profile</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to="/dialogs"
                         className={({isActive}) => (isActive ? cl.activelink : cl.item)}>Messages</NavLink>
                <div className={cl.item}>
                    <NavLink to="/users"
                             className={({isActive}) => (isActive ? cl.activelink : cl.item)}>Users</NavLink>
                </div>
            </div>
            <div className={cl.item}>
                <NavLink to="/news" className={({isActive}) => (isActive ? cl.activelink : cl.item)}>News</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to="/music" className={({isActive}) => (isActive ? cl.activelink : cl.item)}>Music</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to="/settings"
                         className={({isActive}) => (isActive ? cl.activelink : cl.item)}>Settings</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to="/friends"
                         className={({isActive}) => (isActive ? cl.activelink : cl.item)}>
                    Friends
                    <div className={cl.friends}>
                        <div className={cl.friendsItem}>
                            <img className={cl.img}
                                 src="https://media.istockphoto.com/id/471880003/photo/naturally-beautiful.jpg?s=170x170&k=20&c=VgZxK_UcAdalhg33iekqeYRULLv3f6ow1cCzog8xrtE="
                                 alt=""/>
                            <div className={cl.name}>Sasha</div>
                        </div>
                        <div className={cl.friendsItem}>
                            <img className={cl.img}
                                 src="https://img.freepik.com/free-photo/blithesome-student-green-t-shirt-posing-with-laptop-indoor-photo-amazed-male-freelancer-isolated_197531-20164.jpg?w=360"
                                 alt=""/>
                            <div className={cl.name}>Valera</div>
                        </div>
                        <div className={cl.friendsItem}>
                            <img className={cl.img}
                                 src="https://us.123rf.com/450wm/heckmannoleg/heckmannoleg2108/heckmannoleg210800010/172738846-beauty-portrait-of-african-american-girl-with-afro-hair-beautiful-black-woman-cosmetics-makeup.jpg?ver=6"
                                 alt=""/>
                            <div className={cl.name}>Sveta</div>
                        </div>
                    </div>
                </NavLink>
            </div>
        </nav>
    );
};

export default NavBar;