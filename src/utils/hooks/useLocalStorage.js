import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue = null, type) => {
  const [value, setValue] = useState(() => {
    const val = localStorage.getItem(key);
    if (val !== null) {
      switch (type) {
        case "number":
          return parseInt(val);
        case "json":
          return JSON.parse(val);
        default:
          return val;
      }
    }
    if (typeof initialValue === "function") return initialValue();
    return initialValue;
  });
  const updateLocalStorageValue = (newValue) => {
    let storedValue = newValue;
    if (type === "json") storedValue = JSON.stringify(storedValue);
    localStorage.setItem(key, storedValue);
  };
  useEffect(() => {
    if (value !== null) {
      updateLocalStorageValue(value);
    }
  }, [value, key, type]);
  const setAndStoreValue = (newValue) => {
    setValue(newValue);
    updateLocalStorageValue(newValue);
  };
  return [value, setAndStoreValue];
};

export default useLocalStorage;
