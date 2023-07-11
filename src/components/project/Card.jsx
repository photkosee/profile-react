import React from "react";
import "./card.css";

const Card = (probs) => {
    return (
        <div className="slide-container">
            <div className="slide-content">
                <div className="card-wrapper">
                    <div className="card">
                        <div className="image-content">
                            <span className="overlay"></span>
                            <div className="card-image">
                                <img src="/logo.png" alt="" className="card-img"></img>
                            </div>
                        </div>

                        <div className="card-content">
                            <h3 className="name">OOP</h3>
                            <p className="description">
                                test<br/>
                                asef<br/>
                                asdf
                            </p>
                            <button className="card-btn">More Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;