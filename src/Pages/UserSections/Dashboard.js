import React, { useState } from "react";
import Banner1 from "../../Images/banner1.jpeg";
import Banner2 from "../../Images/banner2.jpeg";
import Banner3 from "../../Images/banner3.jpeg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Toolbar } from "@mui/material";

const Dashboard = () => {
  // Slide show
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "400px",
  };

  const properties = {
    duration: 1500,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
  };

  const slideImages = [
    {
      url: Banner1,
    },
    {
      url: Banner2,
    },
    {
      url: Banner3,
    },
  ];

  return (
    <>
      {/* Slideshow */}
      <div style={{ paddingLeft: 30, paddingRight: 30 }}>
        <Slide {...properties}>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              ></div>
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
};

export default Dashboard;
