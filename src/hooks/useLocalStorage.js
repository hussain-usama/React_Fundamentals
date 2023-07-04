import { useEffect, useState } from "react";

const getSavedValue = (key, initialValue) => {
  const savedValue = JSON.parse(window.localStorage.getItem(key));
  if (savedValue) return savedValue;

  if (initialValue instanceof Function) initialValue();
  return initialValue;
};
export default function useLocalStorage(key, initialValue) {
  const [value,setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });
  console.log(value)
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value,setValue];
}
