import React from 'react';
import cl from "./MyPosts.module.css"
import Post from "./posts/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../validte/Validate";
import {Textarea} from "../../common/formsControl/FormsControl";


// export type PostType ={
//     message: string
//     like: number
//     addPost: (postMessage:any) => void
//     postsData: []
//     state: {}
// }

//React.memo???? const MyPosts = React.memo(props.....
const MyPosts = (props: any) => {
let postElements = props.posts.map((p: any) => <Post key={p.id} message={p.message} like={p.like}/>)
    let newPostElements = React.createRef()
    const onAddPost = (values: any) => {
        props.addPost(values.newPostText)
    }
    return (
        <div className={cl.postsBlock}>
            <div className={cl.posts}>
                <h3>My posts</h3>
                <AddNewPostsFormR onSubmit={onAddPost}/>
                <div> new posts</div>
            </div>
            {
                postElements
            }
        </div>
    )

};

const maxLength10 = maxLengthCreator(10)

const AddNewPostsForm = (props: any) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field type="text"
                       placeholder={"add post"}
                       name={'newPostText'}
                       component={Textarea}
                       validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button className="btn">Add post</button>
            </div>
        </form>
    )
}
const AddNewPostsFormR = reduxForm({form: 'ProfileAddNewPostsForm'})(AddNewPostsForm)

export default MyPosts;

// let newPostElement = React.createRef<HTMLInputElement>()
//
// let onAddPosts = () => {
//     props.addPost()
// }
// let onPostChange = () => {
//     let text = newPostElement.current?.value
//     props.updateNewPostText(text)
// }
// <div>
//     <input placeholder={"add yor post..."}
//            className={"input"}
//            onChange={onPostChange}
//            ref={newPostElement}
//            value={props.newPostText}
//     />
// </div>