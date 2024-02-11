import React, {useState} from 'react';
import cl from "./ProfileInfo.module.css"
import ProfileStatusWithHooks from "../../profileStatus/ProfileStatusWithHooks";
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}: any) => {

    const [editMode, setEditMode] = useState(false)

    const editModeRedact = () => {
        setEditMode(true)
    }

    if (!profile) {
        // return <Preloader/>
        return <div>not found....</div>
    }
    const mainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData: any) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }

    return (
        <div>
            <div>
                <img className={cl.mainImg}
                     src="https://www.gannett-cdn.com/presto/2018/08/14/PTAL/6e4fff76-595d-4069-9112-cfe15dbfaa43-IMG_Stadium.jpeg?width=660&height=319&fit=crop&format=pjpg&auto=webp"
                     alt="photo"/>
            </div>
            <div className={cl.descriptionBlock}>
                <img className={cl.photo}
                     src={profile.photos.large || 'https://img.freepik.com/free-icon/user_318-563642.jpg?w=360'}
                     alt="photo"/>
                {isOwner && <input type={'file'} onChange={mainPhotoSelected}/>}

                {
                    editMode
                        ?
                        <ProfileDataForm initialValues={profile}
                                         profile={profile}
                                         onSubmit={onSubmit}
                        />
                        :
                        <ProfileData profile={profile}
                                     isOwner={isOwner}
                                     goToEditMode={editModeRedact}
                        />
                }
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;