import { configureStore } from "@reduxjs/toolkit"

//slices
import quizesSlices from "./quizesSlices";
import modalSlice from "./modalSlice"

export default configureStore({
    reducer: {
        quizesSlices: quizesSlices,
        modalSlice: modalSlice
    }
});