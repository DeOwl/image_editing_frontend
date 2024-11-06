import { FilterProp } from "./pages/OneFilterPage/OneFilterPage"
import { FilterPropWithQueue } from "./pages/AllFiltersPage/AllFiltersPage"

export const getFiltersByTitle = async (title = ''): Promise<FilterPropWithQueue> =>{

    return  fetch(`/api/filters?` + new URLSearchParams({title:title}), {method: "GET", credentials: 'include'})
        .then((response) => response.json());
    
}

export const getFiltersById = async (id = 0): Promise<FilterProp> =>{
    return fetch(`/api/filters/` + id, {method: "GET", credentials: 'include'})
        .then((response) => response.json());
}