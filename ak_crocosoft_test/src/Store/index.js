import { configureStore } from "@reduxjs/toolkit"

//slices
import quizesSlices from "./quizesSlices";

export default configureStore({
    reducer: {
        quizesSlices: quizesSlices
    }
});