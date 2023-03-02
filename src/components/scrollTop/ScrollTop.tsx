import React, { useEffect, useState } from "react";
import { useScrollTrigger, Button, Fab, Icon } from "@mui/material";
import Fade from "@mui/material/Fade";
import { Box } from "@mui/system";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styles from "./ScrollTop.module.css";

const ScrollTop = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  const handleVisibleButton = () => {
    setShowGoTop(window.pageYOffset > 50);
  };
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  }, []);

  return (
    <div className={showGoTop ? "" : styles.goTopHidden} onClick={handleClick}>
      <Fab color="default" aria-label="Go to top" className={styles.goTop}>
        <KeyboardArrowUpIcon className={styles.icon} />
      </Fab>
    </div>
  );
};

export default ScrollTop;
