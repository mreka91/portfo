import React from "react";
import "./projects.css";
import Title from "../../components/Title";
import Card from "../../components/Card";
import { projectData } from "../../assets/data";

function Projects() {
  return (
    <div className="projectsView">
      <div className="projectsTitle">
        <Title>My latest projects</Title>
      </div>
      <div className="projectsGallery">
        {projectData.map((data, key) => {
          return (
            <div key={key}>
              <Card image={data.image} link={data.link} name={data.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
