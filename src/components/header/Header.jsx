"use client";
import React, { useEffect, useState } from "react";
import Styles from "./header.module.css";
import Links from "./links/Links";
import ToggleTheme from "../toggleTheme/ToggleTheme";

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Cette fonction se déclenche lorsque le composant est monté
    setIsLoaded(true); // Indique que la page est chargée une fois le composant monté
  }, []);

  return (
    <>
      <div
        className={`${Styles.container} header ${
          isLoaded ? Styles.headerOpen : ""
        }`}
      >
        <div className={`${Styles.content} `}>
          <div>
            <img src="/Dark Logo.png" alt="" style={{ width: "160px" }} />
          </div>
          <div
            style={{
              display: "flex",
              gap: "30px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ToggleTheme />
            <Links />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
