import React from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForNavigate = (state: any) => ({
    isAuth: state.auth.isAuth
})

//high order component (hoc)
export const withAuthRedirect = (Component: any) => {

    class NavigateComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Navigate to={"/login"}/>
            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthNavigateComponent = connect(mapStateToPropsForNavigate)(NavigateComponent)
    return ConnectedAuthNavigateComponent
};



