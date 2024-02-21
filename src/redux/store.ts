import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

type PostType = {
    id: number;
    message: string;
    like: number
};

// type DataType = {
//     posts: Array<PostType>;
//     messages: Array<MessageType>;
// };

type PostsDataType = {
    posts: Array<PostType>;
};

type ActionType =
    | { type: 'ADD_POST', payload: { message: string } }
    | { type: 'UPDATE_NEW_POST_TEXT', payload: { newText: string } }
    | { type: 'UPDATE_NEW_MESSAGE_BODY', payload: { newMessageBody: string } }
    | { type: 'SEND_MESSAGE' };

let store = {
    _state: {
        profilePage:{
            postsData: [
                {id: 1, message: "..Hi", like: 5},
                {id: 2, message: "..Hello", like: 15}
            ],
            newPostText: 'It-kamasutra',

        },
        messagesPage: {
            dialogsData: [
                {id: 1, name: "Valera",},
                {id: 2, name: "Dimych"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Nik"},
            ],
            messagesData: [
                {id: 1, message: "hi"},
                {id: 2, message: "hello"},
                {id: 3, message: "yo"},
                {id: 4, message: "??"},
            ],
            // newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber(state: any) {
        console.log(":ccc")
    },

    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },

    dispatch(action: ActionType) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)

    }
}



export default store;





