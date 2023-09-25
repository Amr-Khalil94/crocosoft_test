import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  initialState: {
    isOpen: false,
    popUpTitle: "",
    chilledernProps: {},
    modalId: "",
    modalType: "",
    getDataArg: "",
    componentName: null,
    subTitlle: '',
    addDataArg: '',
    modalData: null,
  },
  name: "modal",
  reducers: {
    openModal: (state, action) => {
      console.log(action.payload);
      state.modalData = action.payload.modalData
      state.isOpen = true;
      state.popUpTitle = action.payload.tittle;
      state.modalId = action.payload.rowId;
      state.modalType = action.payload.modalType;
      state.deleteURL = action.payload.deleteURL;
      state.getDataArg = action.payload.getDataArg;
      state.componentName = action.payload.componentName;
      state.subTitlle = action.payload.subTitlle;
      state.addDataArg= action.payload.addDataArg;
     
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal, modalId, modalType, deleteURL, subTitlle, addDataArg } =
  modalSlice.actions;
export default modalSlice.reducer;
