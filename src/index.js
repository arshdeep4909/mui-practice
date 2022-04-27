import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./pages/authentication/Authentication";
import Database from "./pages/database/Database";
import Functions from "./pages/functions/Functions";
import Hosting from "./pages/hosting/Hosting";
import MachineLearning from "./pages/machineLearning/MachineLearning";
import Storage from "./pages/storage/Storage";
import { dashboardTheme } from "../src/dasboardTheme.js";
import { ThemeProvider } from "@mui/private-theming";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={dashboardTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="authentication" element={<Authentication />} />
        <Route path="Database" element={<Database />} />
        <Route path="Functions" element={<Functions />} />
        <Route path="Hosting" element={<Hosting />} />
        <Route path="machine-learning" element={<MachineLearning />} />
        <Route path="Storage" element={<Storage />} />

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
