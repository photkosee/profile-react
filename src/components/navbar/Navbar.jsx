import React from "react";
import "./navbar.css";

const NavBar = () => {
    return (
        <header className="header">
            <nav className="nav container" id="navbar">
                <figure className="nav__logo">
                    <img src="https://user-images.githubusercontent.com/114990364/259049774-4323e11a-1413-4ff7-9d2a-4feba95a8cbc.png" alt="Logo"/>
                </figure>
                <div className="nav__menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i className="bx bxs-home-smile nav__icon"></i>
                                Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="https://photkosee.github.io/blog/" target="{_blank}" className="nav__link">
                                <i className="bx bxs-book nav__icon"></i>
                                Blog
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
