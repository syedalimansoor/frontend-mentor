export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key) => {
  let value = String(localStorage.getItem(key));
  if (value) value = JSON.parse(value);
  return value;
};
