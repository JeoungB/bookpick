//<a href="https://www.flaticon.com/kr/free-icons/" title="적립 아이콘">적립 아이콘 제작자: Freepik - Flaticon</a>
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
  /** 테블릿, 모바일 검색 창 상태 */
  const [mSearch, setMSearch] = useState(false);

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
