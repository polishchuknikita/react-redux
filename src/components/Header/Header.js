import React from 'react';
import './Header.css'
import {NavLink} from 'react-router-dom';

const Header = props => {
    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <NavLink to="/" exact className="logo">
                        Никитосник
                    </NavLink>
                    <ul className="nav-menu">
                        <li className="nav-menu__item">
                            <NavLink to="/" exact className="nav-menu__link">
                                Главная
                            </NavLink>
                        </li>
                        <li className="nav-menu__item">
                            <NavLink to="/News" exact className="nav-menu__link">
                                Новости
                            </NavLink>
                        </li>
                        <li className="nav-menu__item">
                            <NavLink to="/Contacts" exact className="nav-menu__link">
                                Контакты
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;