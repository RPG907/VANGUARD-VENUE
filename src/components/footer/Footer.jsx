import React from "react";
import Styles from "./footer.module.css";
import Link from "next/link";
import links from "../../data/links.json";

const Footer = () => {
  return (
    <>
      <div className={`${Styles.container} footer`}>
        <div className={`${Styles.content} global-container`}>
          <img src="/Dark Logo.png" alt="" style={{ width: "160px" }} />

          <div className={Styles.links}>
            {links.map((element, index) => (
              <Link key={index} href={element.path}>
                {element.title}
              </Link>
            ))}
          </div>

          <p>© 2024 All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
