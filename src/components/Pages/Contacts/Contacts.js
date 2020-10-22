import React, {useState} from 'react';
import './Contacts.css';
import ContactsItem from './ContactsItem';
import photo from '../../../Img/Img';

const Contacts = props => {
    const textArr = [
        {
            id: 1,
            desc: "ES5"
        },
        {
            id: 2,
            desc: "ES6"
        },
        {
            id: 3,
            desc: "React"
        },
        {
            id: 4,
            desc: "HTML"
        },
        {
            id: 5,
            desc: "CSS"
        },
        {
            id: 6,
            desc: "jQuery"
        },
        {
            id: 7,
            desc: "CMS"
        }
    ]
    const [text, addText] = useState(textArr);

    let textItem = text.map(item => {
        return (
            <ContactsItem 
                key={item.id}
                text={item.desc}
            />
        )
    });
    return (
        <section className="contacts-page">
            <div className="container">
                <div className="contacts-desc">
                    <div className="contacts-desc__info">
                        <a href="tel:+380639243241" className="contacts-desc__phone">
                            +38 (063) 924 32 41
                        </a>
                        <h3 className="contacts-desc__name">
                            Полищук Никита
                        </h3>
                        <a href="mailto:polishuknikita@gmail.com" className="contacts-desc__mail">
                            polishuknikita@gmail.com
                        </a>
                        <h4 className="contacts-desc__title">
                            Frontend developer
                        </h4>
                        <ul className="contacts-desc-list">
                            {textItem}
                        </ul>
                    </div>
                    <div className="contacts-desc__img">
                        <img src={photo} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts;