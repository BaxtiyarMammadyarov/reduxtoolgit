import {configureStore}  from '@reduxjs/toolkit';
import listSlice from '../slice/list.slice'

export const GlobalStroe = configureStore({
    reducer : {
        list : listSlice
    }
})