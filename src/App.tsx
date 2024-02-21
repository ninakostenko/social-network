import React, {Component, Suspense, lazy,} from 'react';

import './App.css';
import NavBar from "./components/navBar/NavBar";
import {Route, Routes} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import Friends from "./components/friends/Friends";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer, {withRouter} from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
// import DialogsContainer from "./components/dialogs/DialogsContainer";
import Login from "./components/login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";

const DialogsContainer = lazy(() => import('./components/dialogs/DialogsContainer'));


class App extends Component<any> {
//
//     const API_URL = 'https://jsonplaceholder.typicode.com/'
//     const getPosts = axios({url: `${API_URL}/posts`, method: 'GET', params: {offset: 0, limit: 10}})
//
//     useEffect(() => {
//         getPosts.then(res => console.log(res)).catch(err => console.log(err))
//     })
//
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="App">
                <HeaderContainer/>
                <NavBar/>

                <div className={"content"}>
                    <Routes>
                        <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                        <Route path='/profile' element={<ProfileContainer/>}/>
                        <Route path="/users" element={<UsersContainer pageTitle={'Samuray'}/>}/>
                        <Route path='/dialogs/*' element={
                            <Suspense fallback={<div>Loading..</div>}>
                                <DialogsContainer/>
                            </Suspense>
                        }
                        />
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/friends" element={<Friends/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)
