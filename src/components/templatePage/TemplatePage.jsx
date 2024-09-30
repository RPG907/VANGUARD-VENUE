import React from "react";
import Style from "./templatePage.module.css";
import Image from "next/image";
import ImageComponent from "./ImageComponent";

const TemplatePage = ({
  title,
  title2,
  src = "/musicFest.jpg",
  altImg = "Event",
  sidetitle2 ,
  sidetitle3,
  sidetitle4,
  sidetitle5,

  textbouton1 = "BOOK NOW",
  description1,
  sidetitle6,
  sidetitle7,
  textbouton2 = "SUBSCRIBE",
}) => {
  return (
    <div className={Style.Body}>
      <div className={Style.title_container}>
        <h1 className={Style.title}>{title}</h1>
        <div className={Style.title_2}>{title2}</div>
      </div>

      <div className={Style.items}>
        <div className={Style.image_container}>
          <ImageComponent srcImg={src} alt={altImg} />
        </div>

        <div className={Style.side_container}>
          <div className={Style.side_content}>
            <div>
              <div className={Style.title_2}>{sidetitle2}</div>
              <h2 className={Style.side_title}>{sidetitle3}</h2>
            </div>

            <div>
              <div className={Style.title_2}>{sidetitle4}</div>
              <h2 className={Style.side_title}>{sidetitle5}</h2>
            </div>

            <div className={Style.boutons}>
              <button className={Style.bouton} type="button">
                {textbouton1}
              </button>
            </div>
          </div>
        </div>

        <div className={Style.textContainer}>
          <p className={Style.text}>{description1}</p>
        </div>

        <div className={Style.subscribe}>
          <div className={Style.subscribe_content}>
            <div className={Style.sidetitle}>
              <h2 className={Style.side_title}>{sidetitle6} </h2>
            </div>

            <div className={Style.title_2}>{sidetitle7}</div>

            <div className={Style.boutons}>
              <button className={Style.bouton}>{textbouton2}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;
