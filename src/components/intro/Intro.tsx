import React from "react";
import styles from "./Intro.module.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Intro = () => {
  return (
    <>
      <div className={styles.container}>
        <Grid container spacing={2}>
          <Grid item>
            <Typography variant="h4" color="initial">
              Test
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              color="initial"
              className={styles.textContainer}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Intro;
