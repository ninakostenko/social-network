import React from 'react';
import cl from './users.module.css'
import axios from "axios";

const UsersFunctionComponent = (props) => {
    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
            // props.setUsers([
            //     {
            //         id: 1,
            //         photoUrl: 'https://img.freepik.com/premium-photo/shes-chipper-child-portrait-adorable-little-girl-home_590464-11782.jpg?w=360',
            //         followed: false,
            //         fullName: 'Dmitry',
            //         status: 'I am a friend',
            //         location: {city: 'Kiev', country: 'Ukraine'}
            //     },
            //     {
            //         id: 2,
            //         photoUrl: 'https://imgv3.fotor.com/images/homepage-feature-card/make-blurry-girl-image-clear-with-Fotor-ai-image-enhancer.png',
            //         followed: true,
            //         fullName: 'Sasha',
            //         status: 'I am a boss',
            //         location: {city: 'Cherkasy', country: 'Ukraine'}
            //     },
            //     {
            //         id: 3,
            //         photoUrl: 'https://media.istockphoto.com/id/956123054/photo/portrait-of-a-gorgeous-mixed-race-woman-with-curly-hair-close-up.jpg?s=170667a&w=0&k=20&c=D0YqdlzGu4FNX5A2N07vZSoE8UFuD0s5WznXOnu7nnY=',
            //         followed: false,
            //         fullName: 'Andrey',
            //         status: 'I am here',
            //         location: {city: 'Setsivka', country: 'Ukraine'}
            //     },
            //
            // ])
        }
    }


    return (
        <div>

            <button onClick={getUsers}>get users</button>
            {
                props.users.map(u => <div key={u.id}
                                          className={cl.wrap}>
                        <div className={cl.user}>
                            <div>
                                <img className={cl.photo}
                                     src={u.photos.small !== null ? u.photos.small : 'https://img.freepik.com/free-icon/user_318-563642.jpg?w=360'}
                                     alt={'photo'}/>
                            </div>
                            <div className={cl.name}>{u.name}</div>
                            <div>
                                {
                                    u.followed
                                        ? <button className={cl.button} onClick={() => {
                                            props.unfollow(u.id)
                                        }}>UnFollow</button>
                                        : <button className={cl.button} onClick={() => {
                                            props.follow(u.id)
                                        }}>Follow</button>
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

export default UsersFunctionComponent;