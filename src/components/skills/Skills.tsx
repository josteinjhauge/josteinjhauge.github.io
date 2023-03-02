import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./Skills.module.css";
import listItems, { SkillType } from "./listItems";

const Skills = () => {
  return (
    <>
      <Box className={styles.container}>
        <Typography variant="h4" color="initial">
          Ferdigheter:
        </Typography>
        <Box m="1rem" />
        <Box className={styles.listContainer}>
          <Typography variant="h5" color="initial">
            Placeholder:
          </Typography>
          {listItems.development.map((item: SkillType) => (
            <Typography className={styles.listItem} key={item.name}>
              <img src={item.imgUrl} alt={Image.name} style={{ width: 20 }} />
              <a className={styles.listItemLink} href={item.link}>
                {item.name}
              </a>
            </Typography>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Skills;
