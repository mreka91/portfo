import React from "react";
import "./projects.css";
import Card from "../../components/Card";
import recipe from "../../assets/images/bg/annie-spratt-f4gQ-dJ0yo8-unsplash.jpg";
import sky from "../../assets/images/bg/drmakete-lab-hsg538WrP0Y-unsplash.jpg";
import coffee from "../../assets/images/bg/ksenia-ksenia-oUnoVDZPVdA-unsplash.jpg";
import news from "../../assets/images/bg/matthew-guay-Q7wDdmgCBFg-unsplash.jpg";
import doggie from "../../assets/images/bg/pauline-loroy-U3aF7hgUSrk-unsplash.jpg";
import dog from "../../assets/images/bg/marek-szturc-dFgtAO0qBVk-unsplash.jpg";
import kriszta from "../../assets/images/bg/kriszta.png";
import carleklo from "../../assets/images/bg/carleklo.png";
import Title from "../../components/Title";

function Projects() {
  return (
    <div className="projectsView">
      <div className="projectsTitle">
        <Title>My latest projects</Title>
      </div>

      <div className="projectsGallery">
        <Card
          link="https://github.com/mreka91/recipe-collection-app"
          image={recipe}
        ></Card>
        <Card
          link="https://github.com/mreka91/projekt-electric"
          image={sky}
        ></Card>
        <Card
          link="https://github.com/mreka91/event-page"
          image={coffee}
        ></Card>
        <Card
          link="https://github.com/mreka91/doggie-app"
          image={doggie}
        ></Card>
        <Card link="https://github.com/mreka91/dog-game" image={dog}></Card>
        <Card link="https://github.com/mreka91/fake-news" image={news}></Card>
        <Card link="https://krisztadorka.hu" image={kriszta}></Card>
        <Card link="https://carleklopromotions.se" image={carleklo}></Card>
      </div>
    </div>
  );
}

export default Projects;
