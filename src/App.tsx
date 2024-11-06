import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import AllFiltersPage from "./pages/AllFiltersPage/AllFiltersPage";
import { ROUTES } from "./Routs";
import { OneFilterPage } from "./pages/OneFilterPage/OneFilterPage";
function App() {
  return (
    <div>
      <div className="header">
        <a className="header-text" href="/">Pictura</a>
        <a href={ROUTES.FILTERS} className="header-href">
              <div  className="header-button">Фильтры</div>
        </a>
      </div>
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