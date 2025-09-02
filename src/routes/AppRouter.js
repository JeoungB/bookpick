import { Route, Routes } from "react-router-dom";
import Main from "../pages/home/main";
import SearchPage from "../pages/searchPage";
import DetailPage from "../pages/detailPage";

const AppRouter = () => {
    return(
        <Routes className="router">
            <Route path="/" element={<Main />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/detail/:isbn" element={<DetailPage />} />
        </Routes>
    );
};

export default AppRouter;