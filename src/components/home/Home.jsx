import React, { useState } from "react";
import "./home.css";

const Home = () => {
    const [greet, setGreet] = useState(false);

    return (
        <section className="home container" id="home">
            <div className="home__first">
                <figure onClick={() => setGreet(!greet)}>
                    <img src="/logo.png" alt="Logo" className="home__logo"/>
                    {
                        greet && (
                            <img src="/greetings.png" alt="Greetings" className="home__greet"/>
                        )
                    }
                </figure>
                <h1 className="home__name">
                    <p className="home__letter">P</p>
                    <p className="home__letter">h</p>
                    <p className="home__letter">o</p>
                    <p className="home__letter home__space">t</p>
                    <p className="home__letter">K</p>
                    <p className="home__letter">o</p>
                    <p className="home__letter">s</p>
                    <p className="home__letter">e</p>
                    <p className="home__letter">e</p>
                    <p className="home__letter">k</p>
                    <p className="home__letter">r</p>
                    <p className="home__letter">a</p>
                    <p className="home__letter">i</p>
                    <p className="home__letter">n</p>
                    <p className="home__letter">i</p>
                    <p className="home__letter">r</p>
                    <p className="home__letter">a</p>
                    <p className="home__letter">m</p>
                    <p className="home__letter">o</p>
                    <p className="home__letter">n</p>
                </h1>
                <span>Software Developer</span>

                <div className="home__second">
                    <a href="https://www.linkedin.com/in/phot-kosee/" className="home__link" target="{_blank}">
                        <img src="/linkedin_logo.png" alt="LinkedIn" className="home__icon"/>
                    </a>
                    <a href="https://leetcode.com/peachkosee/" className="home__link" target="{_blank}">
                        <img src="/leetcode_logo.png" alt="LeetCode" className="home__icon"/>
                    </a>
                    <a href="https://www.hackerrank.com/kosee_phot?hr_r=1" className="home__link" target="{_blank}">
                        <img src="/hackerrank_logo.png" alt="HackerRank" className="home__icon"/>
                    </a>
                    <a href="https://github.com/PhotKosee" className="home__link" target="{_blank}">
                        <img src="/github_logo.png" alt="GitHub" className="home__icon"/>
                    </a>
                </div>
                
                <a href="https://drive.google.com/file/d/1fhWbjbsEyfx2vJmUBEwLgNlUhSJjtuHq/view?usp=sharing" className="btn" target="{_blank}">
                    resume
                </a>

                <div className="home__down">
                    <a href="#project">
                        <i className='bx bxs-chevrons-down bx-fade-up down'></i>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;
