import BargerMenu from "./components/BargerMenu";
import Sidebar from "./components/Sidebar";
import Header from "./layouts/main-layout/Header";
import { useState } from "react";
import Main from "./pages/home/main";

function App() {
  /** 사이드 메뉴 오픈 상태 */
  const [open, setOpen] = useState(false);
  return (
    <div className="App flex justify-center">
      <Header />
      <BargerMenu open={open} setOpen={setOpen} />
      <Sidebar open={open}/>
      <Main />
    </div>
  );
}

export default App;
