import { createContext, StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const url = "https://hms-backend-m6zz.onrender.com";
  return (
    <Context.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser, url }}
    >
      <App />
    </Context.Provider>
  );
};

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <AppWrapper />
  // </StrictMode>
);
