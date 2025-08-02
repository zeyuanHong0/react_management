export const setSessionStorage = (key: string, value: string): void => {
  sessionStorage.setItem(key, value);
};

export const getSessionStorage = (key: string): string | null => {
  return sessionStorage.getItem(key);
};

export const removeSessionStorage = (key: string): void => {
  sessionStorage.removeItem(key);
};

export const setLocalStorage = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

export const getLocalStorage = (key: string): string | null => {
  return localStorage.getItem(key);
};

export const removeLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};