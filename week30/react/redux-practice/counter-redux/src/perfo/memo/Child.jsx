import React, { memo } from "react";

const Child = memo(({ name }) => {
  console.log("child rendered");

  return <div>I am child components {name}</div>;
});
export default Child;
