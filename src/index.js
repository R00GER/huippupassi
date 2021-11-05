import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ec962c",
    },
  },
  typography: {
    h1: {
      fontFamily: [
        "Fjalla One",
        "Open Sans",
        "Helvetica Neue",
        "Helvetica",
        "sans-serif",
      ].join(","),
      color: "#f2f2f2",
    },
    h2: {
      fontFamily: [
        "Fjalla One",
        "Open Sans",
        "Helvetica Neue",
        "Helvetica",
        "sans-serif",
      ].join(","),
      fontSize: "2.4rem",
      color: "#f2f2f2",
    },
    body1: {
      color: "#ececec",
    },
    body2: {
      color: "#cecece",
      fontSize: "1rem",
    },
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
