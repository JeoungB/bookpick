import { Route, Routes } from "react-router-dom";
import Main from "../pages/home/main";
import SearchPage from "../pages/searchPage";
import DetailPage from "../pages/detailPage";
import CommunityPage from "../pages/communityPage";

const AppRouter = () => {
    return(
        <Routes className="router">
            <Route path="/" element={<Main />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/detail/:isbn" element={<DetailPage />} />
            <Route path="/community" element={<CommunityPage />} />
        </Routes>
    );
};

export default AppRouter;