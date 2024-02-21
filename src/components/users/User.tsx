import React from 'react';
import cl from "./users.module.css";
import {NavLink} from "react-router-dom";

const User = ({followingInProgress, unfollow, follow, user}:any) => {
    return (
        <>
            <div className={cl.user}>
                <div>
                    <NavLink to={`/profile/:userId? ${user.id} `}>
                        <img className={cl.photo}
                             src={user.photos.small !== null ? user.photos.small : 'https://img.freepik.com/free-icon/user_318-563642.jpg?w=360'}
                             alt={'photo'}/>
                    </NavLink>
                </div>
                <div className={cl.name}>{user.name}</div>
                <div>
                    {
                        user.followed
                            ? <button disabled={followingInProgress.some((id: number) => id === user.id)}
                                      className={cl.button}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }}
                            >UnFollow</button>
                            : <button disabled={followingInProgress.some((id: number) => id === user.id)}
                                      className={cl.button}
                                      onClick={() => {
                                          follow(user.id)
                                      }}
                            >Follow</button>
                    }
                </div>
            </div>
            <div className={cl.status}>
                <div className={cl.userStatus}>...{user.status}</div>
                <div className={cl.userCity}>{'u.location.city'}</div>
                <div className={cl.userCountry}>{'u.location.country'}</div>
            </div>

        </>
    )

};

export default User;