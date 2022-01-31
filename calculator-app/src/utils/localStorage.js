export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key) => {
  const value = String(localStorage.getItem(key));
  console.log(value);
  if (value) return JSON.parse(value);
};
