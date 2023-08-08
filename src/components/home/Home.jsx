import React, { useState } from "react";
import "./home.css";

const Home = () => {
    const [greet, setGreet] = useState(false);

    return (
        <section className="home container" id="home">
            <div className="home__first">
                <figure onClick={() => setGreet(!greet)}>
                    <img src="https://user-images.githubusercontent.com/114990364/259049774-4323e11a-1413-4ff7-9d2a-4feba95a8cbc.png" alt="Logo" className="home__logo"/>
                    {
                        greet && (
                            <img src="https://user-images.githubusercontent.com/114990364/259050436-42536d78-3e17-45c2-abde-6245b4453445.png" alt="Greetings" className="home__greet"/>
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
                        <img src="https://user-images.githubusercontent.com/114990364/258922191-c6549ad1-4b09-469a-bdf7-43b9a3431098.png" alt="LinkedIn" className="home__icon"/>
                    </a>
                    <a href="https://leetcode.com/peachkosee/" className="home__link" target="{_blank}">
                        <img src="https://user-images.githubusercontent.com/114990364/258922182-4df6ad89-8af2-4a15-9d59-ce91b506ffcc.png" alt="LeetCode" className="home__icon"/>
                    </a>
                    <a href="https://www.hackerrank.com/kosee_phot?hr_r=1" className="home__link" target="{_blank}">
                        <img src="https://user-images.githubusercontent.com/114990364/258922080-c1c33823-fd28-4e22-9bb4-938f0d9e498f.png" alt="HackerRank" className="home__icon"/>
                    </a>
                    <a href="https://github.com/PhotKosee" className="home__link" target="{_blank}">
                        <img src="	https://user-images.githubusercontent.com/114990364/258921815-4eaaa4e2-474b-4c1a-8753-231154d257eb.png" alt="GitHub" className="home__icon"/>
                    </a>
                </div>
                
                <a href="https://drive.google.com/file/d/17RbIk7WeL6QwT147nTrNvgNDrU-9pB2N/view?usp=sharing" className="btn" target="{_blank}">
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
