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
          <span>{city}</span>
          <div id="city-hidden">
            <span>{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

