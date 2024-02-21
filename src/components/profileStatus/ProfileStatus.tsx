import React, {ChangeEvent} from 'react';

type ProfilePropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}
type ProfileStatePropsType = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<ProfilePropsType, ProfileStatePropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: ProfilePropsType, prevState: ProfileStatePropsType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onClick={this.activateEditMode}>{this.props.status || "no status"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange}
                               autoFocus={true}
                               onBlur={this.deactivateEditMode}
                               type="text"
                               value={this.state.status}/>
                    </div>
                }
            </>

        );
    }
};

export default ProfileStatus;