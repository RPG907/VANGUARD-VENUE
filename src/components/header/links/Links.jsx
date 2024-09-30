"use client";
import React, { Fragment, useState } from "react";
import Styles from "./links.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import tab from "../../../data/links.json";

const Links = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const onClickHander = () => {
    setOpen(!open);
  };

  return (
    <>
      {/**div container global */}
      <div>
        {/**div container pour desktop */}
        <div className={Styles.containerLinks}>
          {tab.map((element, index) => (
            <Link
              className={pathname === element.path ? `${Styles.active}` : ``}
              key={index}
              href={element.path}
            >
              {element.title}
            </Link>
          ))}

          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </Link>
        </div>

        {/**div container pour mobile */}
        <button onClick={onClickHander} className={`${Styles.menuMobile}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="60"
            viewBox="0 -960 960 960"
            width="60"
          >
            <path d="M160-269.231v-33.846h640v33.846H160Zm0-193.846v-33.846h640v33.846H160Zm0-193.846v-33.846h640v33.846H160Z" />
          </svg>
        </button>

        {
          <div
            className={`${Styles.containerMobileLinks} ${
              open ? Styles.open : ""
            }`}
          >
            {tab.map((element, index) => (
              <Link
                className={pathname === element.path ? `${Styles.active}` : ``}
                key={index}
                href={element.path}
              >
                {element.title}
              </Link>
            ))}
          </div>
        }
      </div>
    </>
  );
};

export default Links;
