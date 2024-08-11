import React, { useMemo, useDeferredValue } from "react";

export const DefferedHook = ({ input }) => {
  const defValue = useDeferredValue(input);
  const list = useMemo(() => {
    const data = [];
    for (let i = 0; i < 80000; i++) {
      data.push(defValue);
    }
    return data;
  }, [defValue]);

  return (
    <div>
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};
