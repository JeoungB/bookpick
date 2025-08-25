import BargerMenu from "./components/BargerMenu";
import Sidebar from "./components/Sidebar";
import Header from "./layouts/main-layout/Header";
import Footer from "./layouts/main-layout/Footer";
import { useState } from "react";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollTop";
import AlrtBox from "./components/AlrtBox";

function App() {
  /** 사이드 메뉴 오픈 상태 */
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <BargerMenu open={open} setOpen={setOpen} />
      <Sidebar open={open}/>
      <AppRouter />
      <Footer />
      <ScrollToTop />
      <AlrtBox />
      </BrowserRouter>
    </div>
  );
}

export default App;
