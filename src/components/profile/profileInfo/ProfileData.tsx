import React from 'react';
import Contacts from "./Contacts";

const ProfileData = ({profile, isOwner, goToEditMode}: any) => {
    return (
        <div> {
            isOwner &&
            <div>
                <button onClick={goToEditMode}>redact..</button>
            </div>
        }

            <div>
                <b>Full Name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {
                profile.lookingForAJob &&
                <div>
                    <b>My professional skills</b>: {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>{Object.keys(profile.contacts).map((key: string) => {
                return <Contacts key={key}
                                 contactTitle={key}
                                 contactValue={profile.contacts[key]}
                />
            })}
            </div>
        </div>
    )
}

export default ProfileData;