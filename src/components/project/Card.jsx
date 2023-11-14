import React from "react";
import "./card.css";

const Card = (props) => {
    const{ image, title, sub1, sub2, tools, des, live, web } = props;

    return (
        <div className="card-wrapper">
            <div className="card">
                <div className="image-content">
                    <img src={image} alt="demo" className="card-img"></img>
                </div>

                <div className="card-content">
                    <h3 className="name">{title}</h3>
                    <h3 className="subtitle">{sub1} <br/> {sub2}</h3>
                    <p className="tools">
                        tools/version control:<br/>
                        {tools.map((item) => {
                            return (
                                <img key={item} src={item} alt="stack's logo" className="card__icon"/>
                            )
                        })}  
                    </p>
                    <div className="btn-wrapper">
                        {
                            live && (
                                <><a href={web} className="card-btn" target="{_blank}">
                                    Website
                                </a>
                                <a href={des} className="card-btn" target="{_blank}">
                                    Details
                                </a>
                                </>
                            )
                        }
                        {
                            !live && (
                                <a href={des} className="card-btn" target="{_blank}">
                                    More Details
                                </a>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;