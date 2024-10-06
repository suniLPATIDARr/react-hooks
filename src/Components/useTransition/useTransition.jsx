import React, { useState, useTransition } from "react";

function UseTransition() {
  const [data, setData] = useState([]);
  const [val, setVal] = useState();
  const [isPending, startTransition] = useTransition();
  const handleChange = (e) => {
    startTransition(() => {
      const arr = [];
      for (let i = 0; i < 20000; i++) {
        arr.push(i);
      }
      setData(arr);
    });
    setVal(e.target.value);
  };
  return (
    <div>
      <input value={val} onChange={handleChange} />
      <div>{isPending && "Loading..."}</div>
      {!isPending && data.map((item) => <div>{`${item} - ${val}`}</div>)}
    </div>
  );
}

export default UseTransition;
