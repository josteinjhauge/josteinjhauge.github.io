import React from "react";
import SocialIcons from "./socialIcons/SocialIcons";
import styles from "./Footer.module.css";
import { Container, Grid, Typography } from "@mui/material";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Container component="footer" className={styles.container}>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={7} md={7} lg={7}>
              <Typography variant="body1" color="white">
                Dette er bare en placeholder tekst bare soån for å teste grid
              </Typography>
            </Grid>
            <Grid item xs={5} md={5} lg={5}>
              <SocialIcons />
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <span className={styles.text}>Bedriftsnavn © {currentYear}</span>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};
export default Footer;
