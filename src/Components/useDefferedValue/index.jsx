import React, { useState } from "react";
import { DefferedHook } from "./useDeffered";
const Main = () => {
  const [val, setVal] = useState();
  return (
    <>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <DefferedHook input={val} />
    </>
  );
};
export default Main;
