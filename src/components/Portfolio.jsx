import React from "react";
import Card from "./Card";
import projects from "./projects";




export default function Portfolio () {
    return (
        <div className="portfolio">
            {projects.map((project) => {
                return <Card key={project.id} img={project.img} title={project.title} link={project.link} delay={project.id - 1}/>
            })}
        </div>
    );
}