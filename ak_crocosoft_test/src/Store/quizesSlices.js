import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//axios
import axios from 'axios'

//get quizes
export const getQuizesThunk = createAsyncThunk(
    "quizes/getQuizesThunk",
    async (_, thunkAPI) => {
        const options = {
            baseURL: `http://localhost:3005`,
            url: '/quizes',
            method: "GET",
        };
        return axios(options)
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                alert("error");
            });
    }
);

//create quizes
export const createQuizThunk = createAsyncThunk(
    "quizes/createQuizThunk",
    async (args, thunkAPI) => {
        const options = {
            baseURL: `http://localhost:3005`,
            url: '/quizes',
            method: "POST",
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            data: JSON.stringify(args)
        };
        return axios(options)
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                alert("error");
            });
    }
);

const quizSlice = createSlice({
    initialState: {
        quizes: [],
        isLocalStorge: false,
        isload: false,
    },
    name: 'quizes',
    reducers: {

    },
    extraReducers: {
        [getQuizesThunk.pending]: (state, action) => {
            state.isload = true
            console.log(action)
        },
        [getQuizesThunk.fulfilled]: (state, action) => {
            console.log(action)
            state.quizes = action.payload
            state.isload = false
        },
        [getQuizesThunk.rejected]: (state, action) => {
            console.log(action)
            state.isload = false
        },

        [createQuizThunk.pending]: (state, action) => {
            state.isload = true
            console.log(action)
        },
        [createQuizThunk.fulfilled]: (state, action) => {
            console.log(action)
            state.quizes.push(action.payload)
            state.isload = false
        },
        [createQuizThunk.rejected]: (state, action) => {
            console.log(action)
            state.isload = false
        },
    }

})

export const { getQuizes, quizesReducer } = quizSlice.actions
export default quizSlice.reducer