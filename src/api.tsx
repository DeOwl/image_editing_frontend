import { FilterProp } from "./pages/OneFilterPage/OneFilterPage"
import { FilterPropWithQueue } from "./pages/AllFiltersPage/AllFiltersPage"
import { dest_api } from "../target_config"


export const getFiltersByTitle = async (title = ''): Promise<FilterPropWithQueue> =>{
    if (title != ""){
    return  fetch(dest_api + '/filters?' + new URLSearchParams({title:title}), {method: "GET", credentials: 'include'})
        .then((response) => response.json());
    }else{
        return  fetch(dest_api + '/filters', {method: "GET", credentials: 'include'})
        .then((response) => response.json());
    }
}

export const getFiltersById = async (id = 0): Promise<FilterProp> =>{
    return fetch(dest_api + '/filters/' + id, {method: "GET", credentials: 'include'})
        .then((response) => response.json());
}