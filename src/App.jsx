// import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navber from "./components/navber/navber";
import Router from "./routes/router";

function App() {
  return (
    <>
      <Navber />
      <Router />
      <Footer />
    </>
  );
}

export default App;
