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
                  <p>{`${days} Días`}</p>
                </div>
              }
            </div>
            <div className="exp-content-wrap">
              <div className="exp-info-wrap">
                {city ? (
                  <React.Fragment>
                    <p id="exp-city">{city}</p>
                    <p id="exp-description"></p>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <p id="exp-about">{about}</p>
                    <p id="exp-description"></p>
                  </React.Fragment>
                )}
              </div>
              <div>
                <div className="price-section">
                  <div className="div">
                    {
                      <div className="discount">
                        <p>
                          <span>
                            <i className="fas fa-gift" />
                          </span>
                          {`${min} personas`}
                        </p>
                      </div>
                    }
                    <div className="ratings-section">
                      {stars ? (
                        <div className="stars">
                          <p id="stars-p">
                            {(Math.round(stars * 100) / 100).toFixed(1)}
                            <span id="star"> &#9733;</span>
                          </p>
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
                          <p id="stars-p">
                            <span> &#9733;</span>
                          </p>
                        </div>
                      )}
                      {<p id="ratings">Recién llegados</p>}
                    </div>
                  </div>
                  <div className="price">
                    <p>Desde</p>
                    {<p id="price">{`S/.${price}`}</p>}
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
