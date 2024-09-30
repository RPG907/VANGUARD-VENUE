"use client";
import React from "react";
import styles from "./card.module.css";
import { useRouter } from "next/navigation";

const Card = ({
  id,
  src = "/artist.jpg",
  altImg = "artist",
  title,
  description1,
  textButton = "En savoir plus",
  urlDestination = "/events/",
}) => {
  const router = useRouter();

  const openEventDetails = () => {
    router.push(urlDestination + id);
  };

  return (
    <div className={`${styles.cardContainer} oneCard`}>
      <div>
        <img className={styles.cardImg} src={src} alt={altImg} />

        <h1 className={styles.cardTitle}>{title}</h1>
        <p className={styles.cardDescription}>{description1}</p>
      </div>
      <button className={styles.cardButton} onClick={openEventDetails}>
        {textButton}
      </button>
    </div>
  );
};

export default Card;
