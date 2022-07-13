import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import ThemeProvider from "react-bootstrap/ThemeProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
