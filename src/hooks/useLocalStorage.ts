import { useEffect, useState } from "react";

const useLocalStorage = (key: string, defaultValue: string | string[]) => {
  const [value, setValue] = useState(() => {
    const currentValue = JSON.parse(
      localStorage.getItem(key) || JSON.stringify(defaultValue)
    );
    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export { useLocalStorage };
