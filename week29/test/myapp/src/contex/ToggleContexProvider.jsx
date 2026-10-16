import { createContext, useState } from "react";

export const ToggleContext = createContext();

export const ToggleContexProvider = ({ children }) => {
  
  const [isCheck, setIscheck] = useState(false);
  const handleIsChecked = (status) => {

   console.log("heii",status);

   
    
    setIscheck(status);

  };
  
  return (
    <ToggleContext.Provider value={{ isCheck, handleIsChecked }}>
      {children}
    </ToggleContext.Provider>
  );
};
