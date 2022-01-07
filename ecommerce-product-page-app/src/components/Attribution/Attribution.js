import React, { useEffect } from "react";
import "./Attribution.scss";

const Attribution = () => {
  useEffect(function () {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
    link.integrity =
      "sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==";
    link.crossOrigin = "anonymous";
    link.referrerPolicy = "no-referrer";

    document.head.appendChild(link);
  }, []);

  return (
    <footer className="attr">
      <p className="attr__para">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
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
          rel="noreferrer"
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
          target="_blank"
          rel="noreferrer"
        >
          &shy;
        </a>
        <a
          className="fab fa-instagram"
          href="https://www.instagram.com/design.alimansoor"
          target="_blank"
          rel="noreferrer"
        >
          &shy;
        </a>
      </div>
    </footer>
  );
};

export default Attribution;
