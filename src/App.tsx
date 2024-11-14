import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import AllFiltersPage from "./pages/AllFiltersPage/AllFiltersPage";
import { ROUTES } from "./Routs";
import { OneFilterPage } from "./pages/OneFilterPage/OneFilterPage";
import {HeaderMain} from "./components/NavBar/NavBar";
import { useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";
import.meta.env.VITE_DEVELOPER_MINDSET;


function App() {
  useEffect(()=>{
    invoke('tauri', {cmd:'create'})
      .then(() =>{console.log("Tauri launched")})
      .catch(() =>{console.log("Tauri not launched")})
    return () =>{
      invoke('tauri', {cmd:'close'})
        .then(() =>{console.log("Tauri launched")})
        .catch(() =>{console.log("Tauri not launched")})
    }
  }, [])

  return (
    <div>
      <BrowserRouter basename="/image_editing_frontend">
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