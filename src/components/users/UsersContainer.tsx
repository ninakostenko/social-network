import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {follow, requestUsers, setCurrentPage, toggleFollowingInProgress, unfollow} from "../../redux/user-reducer";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalCount, getUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component<any> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }


    render() {
        return (
            <Users totalCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChange={this.onPageChange.bind(this)}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        )
    }
}

// const mapStateToProps = (state: any) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalCount: state.usersPage.totalCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

const mapStateToProps = (state: any) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


// щоб не можна зайти без авторизації в компонент  і передати другим параметром в connect
// або поставити реред connect
// let withNavigate = withAuthRedirect(UsersContainer)

// export default withAuthRedirect(connect(mapStateToProps, {
//     follow,
//     unfollow,
//     setCurrentPage,
//     toggleFollowingInProgress,
//     requestUsers
//
// })(UsersContainer))

export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingInProgress, getUsers: requestUsers})
)(UsersContainer)
