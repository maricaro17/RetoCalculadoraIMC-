export const setItem = (item, data) => {
  localStorage.setItem(item, JSON.stringify(data));
};

export const getArrayItem = (item) => {
  return localStorage.getItem(item)
    ? JSON.parse(localStorage.getItem(item))
    : [];
};

