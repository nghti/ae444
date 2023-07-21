import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./assets/Component/Header";
import Content1 from "./assets/Component/Content1";
import Content2 from "./assets/Component/Content2";
import Footer1 from "./assets/Component/Footer1";
import Footer2 from "./assets/Component/Footer2";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <Header />
      <div className="mb-6">
        <Content1 />
      </div>
      <Content2 />
      <div className="mt-4">
        <Footer1 />
      </div>
      <Footer2 />
    </div>
  );
}

export default App;
