import { Link } from "react-router-dom";

import FooterNavBar from "./FooterNavBar";

import logo from "../../assets/logo.svg";
import facebookIcon from "../../assets/facebook-icon.png";
import twitterIcon from "../../assets/twitter-icon.png";
import instagramIcon from "../../assets/instagram-icon.png";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer-wrapper"]}>
        <Link to="" className={classes["footer-logo"]}>
          <img src={logo} alt="audiophile logo"></img>
        </Link>
        <FooterNavBar></FooterNavBar>
        <p className={classes["footer-message"]}>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className={classes["footer-bottom"]}>
          <p className={classes["footer-copyright"]}>
            Copyright 2021. All Rights Reserved
          </p>
          <ul className={classes["footer-bottom-list"]}>
            <li className={classes["footer-bottom-item"]}>
              <a
                href="#"
                className={classes["footer-bottom-link"]}
                target="_blank"
              >
                <img src={facebookIcon} alt="facebook icon"></img>
              </a>
            </li>
            <li className={classes["footer-bottom-item"]}>
              <a
                href="#"
                className={classes["footer-bottom-link"]}
                target="_blank"
              >
                <img src={twitterIcon} alt="twitter icon"></img>
              </a>
            </li>
            <li className={classes["footer-bottom-item"]}>
              <a
                href="#"
                className={classes["footer-bottom-link"]}
                target="_blank"
              >
                <img src={instagramIcon} alt="instagram icon"></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
