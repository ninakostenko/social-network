import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from 'react-router-dom';

export function withRouter(Component: any) {
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
                // router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

type ProfileContainerPropsType = {

}

class ProfileContainer extends React.Component<any> {
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.histiory.push("/login")
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }


    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }


    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}
            />
        );
    }
}


let AuthRedirectComponent = (props: any) => {
    // if (!props.isAuth) return <Navigate to={"/login"}/>
    return <ProfileContainer{...props}/>
}
let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})


// export default compose(
//     connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
//     withRouter,
//     // withAuthRedirect
// )(ProfileContainer);


let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps,
    {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile})(WithUrlDataContainerComponent);
