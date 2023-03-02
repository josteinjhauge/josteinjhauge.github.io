import React from "react";
import Intro from "../../components/intro/Intro";
import { motion } from "framer-motion";
import styles from "./Homepage.module.css";
import ScrollTop from "../../components/scrollTop/ScrollTop";
import Fab from "@mui/material/Fab";
import Skills from "../../components/skills/Skills";
import Landing from "../../components/landing/Landing";

const HomePage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={styles.container}
      >
        <Landing />
        <Intro />
        <Skills />
      </motion.div>
    </>
  );
};

export default HomePage;
