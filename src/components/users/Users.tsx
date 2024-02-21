import React from 'react';
import cl from "./users.module.css";
import {NavLink} from "react-router-dom";
import Paginator from "../common/paginator/Paginator";
import User from "./User";
import {UsersType} from "../../redux/auth-reducer";


type UserPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    onPageChange: (pageNumber: number) => void
    users: Array<UsersType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

const Users: React.FC<UserPropsType> = ({currentPage, onPageChange, totalCount, pageSize, users, ...props}: any) => {
    return (
        <div className={cl.page}>
            <Paginator currentPage={currentPage}
                       onPageChange={onPageChange}
                       totalCount={totalCount}
                       pageSize={pageSize}
            />
            {
                users.map((u: UsersType) => <User user={u}
                                                  followingInProgress={props.followingInProgress}
                                                  unfollow={props.unfollow}
                                                  follow={props.follow}
                    />
                )
            }
        </div>
    );
};

export default Users;