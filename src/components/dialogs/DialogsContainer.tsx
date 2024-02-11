import React from 'react';
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        const match = {params: useParams()};
        return (
            <Component
                {...props}
                location={location}
                params={params}
                navigate={navigate}
                match={match}
            />
        );
    }

    return ComponentWithRouterProp;
}

let mapStateToProps = (state: any) => {
    return {
        messagesPage: state.messagesPage,
        // isAuth: state.auth.isAuth
    }
}

let mapSDispatchToProps = (dispatch: any) => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

// let AuthRedirectComponent = (props: any) => {
//     if (!props.isAuth) return <Navigate to={"/login"}/>
//     return <Dialogs{...props}/>
// }
// let AuthRedirectComponent =  withAuthRedirect(Dialogs);
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
// const DialogsContainer = connect(mapStateToProps, mapSDispatchToProps)(WithUrlDataContainerComponent);
// export default DialogsContainer;



export default compose(
    connect(mapStateToProps, mapSDispatchToProps),
    withAuthRedirect
)(Dialogs);