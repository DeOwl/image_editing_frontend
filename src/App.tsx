import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import AllFiltersPage from "./pages/AllFiltersPage/AllFiltersPage";
import { ROUTES } from "./Routs";
import { OneFilterPage } from "./pages/OneFilterPage/OneFilterPage";
import { useNavigate } from "react-router-dom"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} index element={<HomePage/>} />
          <Route path={ROUTES.FILTERS} element={<AllFiltersPage />} />
          <Route path={`${ROUTES.FILTERS}/:id`} element={<OneFilterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;