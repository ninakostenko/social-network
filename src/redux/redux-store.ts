import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import userReducer from "./user-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer }  from "redux-form"
import appReducer from "./app-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: userReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSOIN_COMPOSE_ || compose
const store = createStore(rootReducer, composeEnhancers( applyMiddleware(thunkMiddleware)));
// @ts-ignore
window._store_ = store;

export default store