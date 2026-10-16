import React from "react";

const useUpper = () => {
  const upperize = (word) => {
    let upper = word.toUpperCase();
    return upper;
  };

  return { upperize };
};

export default useUpper;
