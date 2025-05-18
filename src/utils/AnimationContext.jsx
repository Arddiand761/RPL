import { createContext, useState } from 'react';

export const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
  const [transitionType, setTransitionType] = useState('fade');
  
  return (
    <AnimationContext.Provider value={{ transitionType, setTransitionType }}>
      {children}
    </AnimationContext.Provider>
  );
};