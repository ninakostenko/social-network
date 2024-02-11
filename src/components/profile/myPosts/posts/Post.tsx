import React from 'react';
import cl from "./Post.module.css";

export type PropsPostType = {
    message: string
    like: number

}

const Post = (props: PropsPostType) => {
    return (
        <div>
            <div className={cl.item}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/uk/thumb/4/4d/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%81%D1%82%D1%80%D1%96%D1%87%D0%BA%D0%B8_%C2%AB%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80._%D0%A8%D0%BB%D1%8F%D1%85_%D0%B2%D0%BE%D0%B4%D0%B8%C2%BB.jpg/220px-%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%81%D1%82%D1%80%D1%96%D1%87%D0%BA%D0%B8_%C2%AB%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80._%D0%A8%D0%BB%D1%8F%D1%85_%D0%B2%D0%BE%D0%B4%D0%B8%C2%BB.jpg"
                    alt="avatar"/>
                {props.message}
            </div>
            <div>
                <span>like:</span>{props.like}
            </div>
        </div>
    );
};

export default Post;