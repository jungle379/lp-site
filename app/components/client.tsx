"use client";

import { useEffect, useState } from "react";
import { TextGenerateEffectDemo } from "./text";

export const ClientComponent = () => {
  useEffect(() => {
    counter;
  }, []);
  const counter = () => {
    console.log("OK!");
  };

  return (
    <>
      <TextGenerateEffectDemo />
    </>
  );
};
