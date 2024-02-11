import React from 'react';
import cl from "./users.module.css";
import {NavLink} from "react-router-dom";
import Paginator from "../common/paginator/Paginator";


export type UserType = {
    id: number
    photos: string | any
    name: string
    followed: boolean
    status: any
}
const Users = ({currentPage, onPageChange, totalCount, pageSize, ...props}:any) => {


    const pagesCount = Math.ceil(totalCount / pageSize)

    return (

        <div className={cl.page}>
            <Paginator currentPage={currentPage}
                       onPageChange={onPageChange}
                       totalCount={totalCount}
                       pageSize={pageSize}
                       pagesCount={pagesCount}
            />


            {
                props.users.map((u: UserType) =>
                    <div key={u.id}
                         className={cl.wrap}
                    >
                        <div className={cl.user}>
                            <div>
                                <NavLink to={`/profile/:userId? ${u.id} `}>
                                    <img className={cl.photo}
                                         src={u.photos.small !== null ? u.photos.small : 'https://img.freepik.com/free-icon/user_318-563642.jpg?w=360'}
                                         alt={'photo'}/>
                                </NavLink>
                            </div>
                            <div className={cl.name}>{u.name}</div>
                            <div>
                                {
                                    u.followed
                                        ? <button disabled={props.followingInProgress.some((id: number) => id === u.id)}
                                                  className={cl.button}
                                                  onClick={() => {
                                                      props.unfollow(u.id)
                                                  }}
                                        >UnFollow</button>
                                        : <button disabled={props.followingInProgress.some((id: number) => id === u.id)}
                                                  className={cl.button}
                                                  onClick={() => {
                                                      props.follow(u.id)
                                                  }}
                                        >Follow</button>
                                }
                            </div>
                        </div>
                        <div className={cl.status}>
                            <div className={cl.userStatus}>...{u.status}</div>
                            <div className={cl.userCity}>{'u.location.city'}</div>
                            <div className={cl.userCountry}>{'u.location.country'}</div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Users;