import React from 'react';
import './Footer.css';
import {NavLink} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-info">
                    <NavLink to="/" exact className="logo">
                        Никитосник
                        <span>
                            Single Page Application
                        </span>
                    </NavLink>
                    <p className="footer-info__theme">
                        Дипломный проект
                    </p>
                    <p className="footer-info__credits">
                        Made by
                        <span>
                            Никита Полищук
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;