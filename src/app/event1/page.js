import TemplatePage from "@/components/templatePage/TemplatePage";
import React from "react";
//import Style from "./events.module.css";

const description =
  " Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet..";

const Event1 = () => {
  return (
    <>
      <TemplatePage
        title="THE ULTIMATE BUBBLE SHOW"
        title2="Tuesday February 13, 2024"
        src="/events1_2.jpg"
        altImg="bubble show"
        sidetitle2="SHOW DATE & TIME:"
        sidetitle3="TUESDAY FEBRUARY 13, 2:00PM"
        sidetitle4="TICKET PRICE:"
        sidetitle5="$12 (INCLUSIVE OF BOOKING FEE)"
        textbouton1="BOOK NOW"
        description1={description}
        sidetitle6="JOIN OUR MAILING LIST"
        sidetitle7="Stay up to date with all our latest news, events, special offers and
        more."
        textbouton2="SUBSCRIBE"
      />
    </>
  );
};

export default Event1;
