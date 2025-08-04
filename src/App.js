import BargerMenu from "./components/BargerMenu";
import Sidebar from "./components/Sidebar";
import Header from "./layouts/main-layout/Header";
import { useState } from "react";

function App() {
  /** 사이드 메뉴 오픈 상태 */
  const [open, setOpen] = useState(false);
  return (
    <div className="App px-20">
      <Header />
      <BargerMenu open={open} setOpen={setOpen} />
      <Sidebar />
    </div>
  );
}

export default App;
