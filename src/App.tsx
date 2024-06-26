import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Theme from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyles";
import Header from "./components/Header";

import IndexPage from "../src/Pages/IndexPage";
import CustomCursor from "./components/Cursor";
import Footer from "./components/Footer";
import Archive from "./Pages/Archive";
import { Helmet } from "react-helmet";
import { PacmanLoader } from "react-spinners";

type ThemeType = "dark" | "light";

function App() {
  const [theme, setTheme] = useState<ThemeType>("dark");
  const [Loading, setLoading] = useState(false);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    document.title = "Nia Bez";
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {Loading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <PacmanLoader color={"#56DCC8"} loading={Loading} size={20} />
        </div>
      ) : (
        <>
          <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap"
              rel="stylesheet"
            />
          </Helmet>
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
        </>
      )}
    </div>
  );
}

export default App;
