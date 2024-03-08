"use client";

import { useState } from "react";
import { TextGenerateEffectDemo } from "./text";

export const ClientComponent = () => {
  const [client, setClient] = useState();
  return (
    <>
      <TextGenerateEffectDemo />
    </>
  );
};
