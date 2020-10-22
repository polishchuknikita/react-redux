import React from 'react';

const ContactsItem = props => {
    return (
        <li className="contacts-desc-list__item">
            <p className="contacts-desc-list__text">
                {props.text}
            </p>
        </li>
    )
}

export default ContactsItem;