import React, { Component } from "react";



export const CityCard = ({ urlLink, city, description }) => {
  const url = `url(${urlLink})`;
  return (
    <div className="city-card-wrapper">
      <div className="city-card">
        <div
          className="city-card-img"
          style={{
            backgroundImage: url,
          }}
        />
        <div className="city-details">
          <div id="triangle" />
          <p>{city}</p>
          <div id="city-hidden">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

