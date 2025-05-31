import React, { useCallback, useMemo } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import FormPage from "./pages/FormPage";
import { ReactComponent as Logo } from "./assets/logo.svg";
import "./App.css";

const App = React.memo(() => {
  const menuItems = useMemo(() => ["Home", "Form"], []);

  const renderLink = useCallback((text, path) => (
    <Link key={path} to={path}>{text}</Link>
  ), []);

  return (
    <div className="app">
      <header>
        <Logo className="logo" />
        <nav>
          {renderLink("Home", "/")}
          {renderLink("Form", "/form")}
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </div>
  );
});

export default App;