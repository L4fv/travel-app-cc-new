import React, { Component } from "react";
import Link from "next/link";

export const HeadoutPicks = ({
  description,
  price,
  stars,
  city,
  about,
  days,
  min,
  url,
  slug,
}) => {
  const state = {
    listed: false,
  };
  let style;
  console.log("find", slug);
  console.log("description", description);
  if (state.listed) {
    style = {
      color: "#f43361",
      fontSize: "20px",
      position: "absolute",
      right: "10px",
      top: "15px",
      fontWeight: "700",
      transition: "transform 0.3s ease-in-out",
    };
  } else {
    style = {
      color: "white",
      fontSize: "20px",
      position: "absolute",
      right: "10px",
      top: "15px",
      fontWeight: "400",
      transition: "transform 0.3s ease-in-out",
    };
  }
  return (
    <Link key={slug} href={"/paquetes/" + slug}>
      <div className="exp-card">
        {
          <React.Fragment>
            <div
              className="exp-card-img"
              style={{
                backgroundImage: `url(${url})`,
              }}
            >
              {
                <div className="cashback">
                  <span>{`${days} Días`}</span>
                </div>
              }
            </div>
            <div className="exp-content-wrap">
              <div className="exp-info-wrap">
                {city ? (
                  <React.Fragment>
                    <span id="exp-city">{city}</span>
                    <span id="exp-description"></span>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <span id="exp-about">{about}</span>
                    <span id="exp-description"></span>
                  </React.Fragment>
                )}
              </div>
              <div>
                <div className="price-section">
                  <div className="div">
                    {
                      <div className="discount">
                        <span>
                          <span>
                            <i className="fas fa-gift" />
                          </span>
                          {`${min} personas`}
                        </span>
                      </div>
                    }
                    <div className="ratings-section">
                      {stars ? (
                        <div className="stars">
                          <span id="stars-p">
                            {(Math.round(stars * 100) / 100).toFixed(1)}
                            <span id="star"> &#9733;</span>
                          </span>
                        </div>
                      ) : (
                        <div
                          style={{
                            width: "25px",
                            height: "20px",
                            borderRadius: "50%",
                            background:
                              "linear-gradient(340deg, #ffbb58, #f5c684)",
                            paddingTop: "3px",
                          }}
                        >
                          <span id="stars-p">
                            <span> &#9733;</span>
                          </span>
                        </div>
                      )}
                      {<span id="ratings">Recién llegados</span>}
                    </div>
                  </div>
                  <div className="price">
                    <span>Desde</span>
                    {<span id="price">{`S/.${price}`}</span>}
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        }
      </div>
    </Link>
  );
};
