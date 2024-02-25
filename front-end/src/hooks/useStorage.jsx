import { useState } from "react";


export const userStorage = () => {

  const setItem = (value) => {
    localStorage.setItem('data', JSON.stringify(value));
    setUserState(value)
  };

  const getItem = () => {
    const item = localStorage.getItem('data');
    return item ? JSON.parse(item) : null;
  };
  
  const [userState, setUserState] = useState(getItem)

  const removeItem = (key) => {
    localStorage.removeItem(key);
    setUserState(null)
  };

  const clear = () => {
    localStorage.clear();
    setUserState(null)
  };

  return { setItem, userState, removeItem, clear };
};
