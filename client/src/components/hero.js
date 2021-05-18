import React from "react";
import "../components/style.css";


const Hero = () => (
  <div className="text-center hero-image">
    <h1 className="mb-4 hero-image"
      style={{
        color: "var(--forest)",
        fontWeight: "bolder",
        fontSize: "75px",
        textShadow: "1px 1px var(--smoke)",
        fontFamily: "'Montserrat', sans-serif"
      }}>
      Neighborly
    </h1>


  </div>
);

export default Hero;
