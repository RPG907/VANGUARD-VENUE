import React from "react";
import Image from "next/image";

const ImageComponent = ({ srcImg = "/musicFest.jpg", alt = "music" }) => {

  return (
    <>
      <img src={srcImg} alt={alt}></img>
    </>
  );
};

export default ImageComponent;
