import { Route, Routes } from "react-router-dom";
import { useCustomCursor } from "./hooks/useCustomCursor";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

import { useRef } from "react";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Socials from "./components/Socials";

const App = () => {
  const innerCursorRef = useRef(null);
  const outerCursorRef = useRef(null);

  useSmoothScroll();
  useCustomCursor(innerCursorRef, outerCursorRef);

  return (
    <div className='app'>
      <div className='noise'></div>
      <CustomCursor
        innerCursorRef={innerCursorRef}
        outerCursorRef={outerCursorRef}
      />
      <Navbar2 />
      <Socials />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Navbar footerNav />
      <Footer />
    </div>
  );
};

export default App;
