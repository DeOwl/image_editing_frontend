import { combineReducers, configureStore } from "@reduxjs/toolkit"
import dataReducer from "./slices/filtersSlice"


const Store  = configureStore({
    reducer: combineReducers({
        ourData: dataReducer
    })
})
export default Store 