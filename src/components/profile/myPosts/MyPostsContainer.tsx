import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state: any) => {
    return{
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
const mapSDispatchToProps = (dispatch: any) => {
    return{
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapSDispatchToProps)(MyPosts)

export default MyPostsContainer;