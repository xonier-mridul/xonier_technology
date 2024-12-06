"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const InitAos = () => {
  useEffect(() => {
    if (window !== "undefind") {
      Aos.init({
        duration: 2000,
      });
    }
  }, []);

  return <></>;
};

export default InitAos;
