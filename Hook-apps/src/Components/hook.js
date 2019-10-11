import React, { useState } from "react";

const Hook = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      Hook: {count}
      <br />
      <button onClick={() => setCount(0)}>Очистить</button>
      <button onClick={() => setCount(i => i + 1)}>+</button>
      <button onClick={() => setCount(i => i - 1)}>-</button>
    </div>
  );
};

export default Hook;
