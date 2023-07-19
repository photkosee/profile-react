import React from "react";
import "./card.css";

const Card = (props) => {
    const{ image, title, sub1, sub2, tools } = props;
    return (
        <div className="card-wrapper">
            <div className="card">
                <div className="image-content">
                    <img src={image} alt="" className="card-img"></img>
                </div>

                <div className="card-content">
                    <h3 className="name">{title}</h3>
                    <h3 className="subtitle">{sub1} <br/> {sub2}</h3>
                    <p className="tools">
                        tools/version control:<br/>
                        {tools.map((item) => {
                            return (
                                <img key={item} src={item} alt="" className="card__icon"/>
                            )
                        })}  
                    </p>
                    <button className="card-btn">More Details</button>
                </div>
            </div>
        </div>
    );
}

export default Card;