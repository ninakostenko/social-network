import React from 'react';

const Contacts = ({contactTitle, contactValue}: any) => {
    return (
        <div>
            <b>{contactTitle}</b> : {contactValue}
        </div>
    )
}
export default Contacts;