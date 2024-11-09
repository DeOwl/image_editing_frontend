import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux";


const dataSlice = createSlice({
    name: "data",
    initialState: {
        Search: "",
    },
    reducers: {
        setSearch(state, {payload}) {  // изменяем состояние на полученные данные
            state.Search = payload
        },
    }
})

export const useSearch = () =>
    useSelector((state : any) => state.ourData.Search)

export const {
    setSearch: setSearchAction,
} = dataSlice.actions


export default dataSlice.reducer