export const getStorageTheme = () => {
    const storedValue = localStorage.getItem("themeMode");
    return storedValue === null ? "light" : (storedValue as "light" | "dark");
  };