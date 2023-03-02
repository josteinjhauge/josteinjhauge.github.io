import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine, ISourceOptions } from "tsparticles-engine";
import { loadSeaAnemonePreset } from "tsparticles-preset-sea-anemone";

const Landing = () => {
  const options: ISourceOptions = {
    preset: "seaAnemone",
  };

  const particlesInit = async (main: Engine) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadSeaAnemonePreset(main);
  };
  return (
    <>
      <Particles options={options} init={particlesInit} />
    </>
  );
};

export default Landing;
