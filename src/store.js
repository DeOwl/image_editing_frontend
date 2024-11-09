import { combineReducers, configureStore } from "@reduxjs/toolkit"
import dataReducer from "./slices/filtersSlice"


export default configureStore({
    reducer: combineReducers({
        ourData: dataReducer
    })
})