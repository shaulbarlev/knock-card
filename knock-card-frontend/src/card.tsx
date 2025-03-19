// import { useState } from "react";
import "./App.css";

import bgvideo from "./assets/black-matte-fallback.jpg"; // Importing an image
import bgfallback from "./assets/Black_Matte-v5-nobuttons.mp4"; // Importing an image

function Card() {
  return (
    <div className="card">
      <div className="overlay-container">
        <div className="overlay-top">
          <div className="profile-pic"></div>
          <h1>Tomi Lev</h1>
          <h2>Sales Executive | Monday.com</h2>
          <h3>Helping teams work better, faster, smarter 🚀</h3>
        </div>
        <div className="overlay-bottom">
          <ul>
            <li className="card-btn">
              <a href="#">Chat on LinkedIn</a>
            </li>
            <li className="card-btn">
              <a href="#">Chat on WhatsApp</a>
            </li>
            <li className="card-btn">
              <a href="#">Chat on Slack</a>
            </li>
            <li className="card-btn">
              <a href="#">Book a meeting</a>
            </li>
          </ul>
        </div>
        <div className="overlay-socials">
          <ul>
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
          <h3>Powered by Knock</h3>
        </div>
      </div>
      <div id="video-container">
        <img id="fallback-image" src={bgfallback} style={{ display: "none" }} />
        <video id="card-video" autoPlay muted playsInline>
          <source src={bgvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Card;
