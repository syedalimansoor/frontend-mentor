import React, { Component } from "react";
import "./Attribution.css";

export default class Attribution extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/31a888942e.js";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  }

  render() {
    return (
      <footer className="attr">
        <p className="attr__para">
          Challenge by
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            className="attr__link"
          >
            Frontend
            <br />
            Mentor
          </a>
        </p>
        <hr className="attr__hr" />
        <p className="attr__para">
          Coded by
          <a
            href="https://www.instagram.com/design.alimansoor"
            target="_blank"
            className="attr__link"
          >
            Syed Ali
            <br />
            Mansoor
          </a>
        </p>
        <div className="attr__btns">
          <a
            className="fab fa-github"
            href="https://www.github.com/alimansoor-create"
          ></a>
          <a
            className="fab fa-instagram"
            href="https://www.instagram.com/design.alimansoor"
          ></a>
        </div>
      </footer>
    );
  }
}
