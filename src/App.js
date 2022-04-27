import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigator,
  Navigate,
} from "react-router-dom";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import EventHandling from "./components/EventHandling";
import Gallery from "./components/Gallery";
import ProductList from "./components/ProductList";
import Signup from "./components/Signup";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const theme1 = createTheme({
    palette: { mode: "light",
    warning: {
      main: "#ed6c02",
    },
  },
  });

  const theme2 = createTheme({
    palette: { mode: "dark" },
  });

  return (
    <ThemeProvider theme={darkTheme ? theme2 : theme1 }>
      <BrowserRouter>
      {/* passing the props */}
        <Header darkTheme={ darkTheme } setDarkTheme={ setDarkTheme }/>
        <Routes>
          <Route element={<Home>Home</Home>} path="home" />
          <Route element={<Login />} path="Login" />
          <Route element={<NotFound />} path="notfound" />

          <Route element={<Navigate to="/home" />} path="/" />
          <Route element={<Navigate to="/login" />} path="/a" />
          <Route element={<Navigate to="/notfound" />} path="*" />

          <Route element={<EventHandling>Event</EventHandling>} path="event" />
          <Route element={<Navigate to="/event" />} path="ash" />

          <Route element={<Gallery />} path="gallery" />
          <Route element={<Navigate to="/gallery" />} path="a" />

          <Route element={<ProductList />} path="productlist" />
          <Route element={<Navigate to="/productlist" />} path="aa" />

          <Route element={<Signup />} path="signup" />
          <Route element={<Navigate to="/signup" />} path="ai" />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
