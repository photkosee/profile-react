import React from "react";
import "./project.css";
import Card from "./Card";

const Project = () => {
    return (
        <section className="project section" id="project">
            <h2 className="section__title project__name">Projects</h2>
            <div className="project__container container grid">
                <Card />
            </div>
        </section>
    );
}

export default Project;
