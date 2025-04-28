import Logo from "../pictures/Wagner-logo.jpg";
import { useState } from "react";
import slideUno from "../pictures/slideUno.jpg";
import slideDos from "../pictures/slideDos.jpg";
import { EmblaCarousel } from "../components";

function Dashboard(props) {
  return (
    <>
      <div className="Dash">
        <span>
          <h1>Welcome to Wangner </h1>
        </span>
      </div>
      <EmblaCarousel></EmblaCarousel>
    </>
  );
}

export default Dashboard;
