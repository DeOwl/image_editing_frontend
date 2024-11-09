import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import AllFiltersPage from "./pages/AllFiltersPage/AllFiltersPage";
import { ROUTES } from "./Routs";
import { OneFilterPage } from "./pages/OneFilterPage/OneFilterPage";
import {HeaderMain} from "./components/NavBar/NavBar";
function App() {
  return (
    <div>
      <BrowserRouter  basename="/image_editing_frontend">
        <Routes>
          <Route path="/" element={<HeaderMain/>} >
            <Route path="" index element={<HomePage/>} />
            <Route path={ROUTES.FILTERS} element={<AllFiltersPage />} />
            <Route path={`${ROUTES.FILTERS}/:id`} element={<OneFilterPage />} />
          </Route>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;