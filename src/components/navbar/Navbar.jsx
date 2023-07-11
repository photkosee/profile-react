import React from "react";
import "./navbar.css";

const NavBar = () => {
    return (
        <header className="header">
            <nav className="nav container" id="navbar">
                <figure className="nav__logo">
                    <img src="/logo.png" alt="Logo"/>
                </figure>
                <div className="nav__menu">
                    <ul className="nav__list grid">
                        <li className={"nav__item"}>
                            <a href="#home" className="nav__link">
                                <i className="bx bxs-home-smile nav__icon"></i>
                                Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#project" className="nav__link">
                                <i className="bx bxs-rocket nav__icon"></i>
                                Projects
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
