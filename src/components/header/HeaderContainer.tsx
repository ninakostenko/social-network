import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component<any> {
    render() {
        return (
            <Header {...this.props}/>

        );
    }
}

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.isAuth
})


export default connect(mapStateToProps, {logout})(HeaderContainer)