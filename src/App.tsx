import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Theme from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyles";
import Header from "./components/Header";

import IndexPage from "../src/Pages/IndexPage";
import CustomCursor from "./components/Cursor";
import Footer from "./components/Footer";
import Archive from "./Pages/Archive";

function App() {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    document.title = "Nia Bez";
  }, []);

  return (
    <div className="App">
      <Theme theme={theme}>
        <CustomCursor />
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
        <Footer />
      </Theme>
    </div>
  );
}

export default App;
