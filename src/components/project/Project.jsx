import React from "react";
import "./project.css";
import Card from "./Card";

const Project = () => {
    return (
        <section className="project container" id="project">
            <div className="project__first">
                <h2 className="section__title project__name">Projects</h2>
                <Card />
            </div>
        </section>
    );
}

export default Project;
