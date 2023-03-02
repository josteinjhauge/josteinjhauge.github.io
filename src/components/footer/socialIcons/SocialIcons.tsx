import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./SocialIcons.module.css";
import IconButton from "@mui/material/IconButton";

const SocialIcons = () => {
  return (
    <>
      {/* TODO: Legg inn url til riktig steder når det trengs */}
      <div className={styles.iconList}>
        <ul>
          <li className={styles.socialIcon}>
            <a href="https://www.instagram.com">
              <InstagramIcon />
            </a>
          </li>
          <li className={styles.socialIcon}>
            <a href="https://nb-no.facebook.com/">
              <FacebookIcon />
            </a>
          </li>
          <li className={styles.socialIcon}>
            <a href="https://www.linkedin.com/">
              <LinkedInIcon />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SocialIcons;
