import { memo } from "react";

const Child = memo(({ onclick }) => {
  console.log("child clicked");

  return <button onClick={onclick}>Click me</button>;
});
export default Child;
