import React from 'react';
import Header, {HeaderPropsType} from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component<HeaderPropsType> {
    render() {
        return (
            // <Header {...this.props}/>
            <Header isAuth={this.props.isAuth}
                    login={this.props.login}
                    logout={this.props.logout}
            />

        );
    }
}

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.isAuth
})


export default connect(mapStateToProps, {logout})(HeaderContainer)