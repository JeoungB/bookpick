import { Route, Routes } from "react-router-dom";
import Main from "../pages/home/main";
import SearchPage from "../pages/searchPage";

const AppRouter = () => {
    return(
        <Routes className="router">
            <Route path="/" element={<Main />} />
            <Route path="/search" element={<SearchPage />} />
        </Routes>
    );
};

export default AppRouter;