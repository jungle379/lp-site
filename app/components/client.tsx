"use client";

import { AccordionComp } from "./accordion";
import { TextGenerateEffectDemo } from "./text";

export const ClientComponent = () => {
  return (
    <>
      <TextGenerateEffectDemo />
      <div className="h-[100px]">
        <AccordionComp />
      </div>
    </>
  );
};
