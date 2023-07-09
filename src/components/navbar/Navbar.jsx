import React from "react";
import "./navbar.css";

const NavBar = () => {
    const location = window.location;
    return (
        <header className="header">
            <nav className="nav container" id="navbar">
                <a href="#index" className="nav__logo">
                    <img src="/logo.png" alt="Greetings" className="logo" width={40} height={40}/>
                </a>
                <div className="nav__menu">
                    <ul className="nav__list grid">
                        <li className={"nav__item" + location}>
                            <a href="#home" className={location === "home" ? "nav__link active" : "nav__link"}>
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