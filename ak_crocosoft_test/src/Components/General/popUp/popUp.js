//react
import React, { useEffect, useState, useRef } from "react";


//material ui
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";


//redux
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../Store/modalSlice.js";
// import { deleteRow, getRows } from "../../../Store/requestsSlice";

//components

import AddAndEditQuis from './addAndEditQuis_PopUp.js'
// import Delete from "./delete";
// import AddProjectCat from "./addProjectCat";
// import AddBlogCat from "./addBlogCat";
// import AddCareerCat from "./addCareerCat";
// import AddFeedBacks from "./addFeedBacks.js";
// import AddService from "./addService.js";
// import AddEditJobs from './addEditJob'
// import ErrorNotePopUp from './errorNotePopUp'

// //styles
import "./popUp.css";

export default () => {
    //redux
    const dispatch = useDispatch();
    const {
        isOpen,
        popUpTitle,
        modalId,
        modalType,
        deleteURL,
        getDataArg,
        getAllData,
        componentName,
    } = useSelector((state) => state.modalSlice);

    useEffect(() => {
        console.log(componentName);
    }, [componentName]);

    //dynamic component inCase i have muli popUp and i dont need to render the markup of popUP everywhere and to avoid to use many if conds
    const componentsLookUp = {
        addAndEditQuis: AddAndEditQuis,
    };
    let renderComponent;
    if (componentName) {
        const SelectedComponent = componentsLookUp[componentName];
        if (SelectedComponent) {
            renderComponent = <SelectedComponent />;
        }
    }

    return (

        <div className="popUp-parent">
            <h1>Modal</h1>



            <Dialog
                className="popUp-parent"
                open={isOpen}
                onClose={() => {
                    dispatch(closeModal());
                }}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title" className="p-0">
                    {popUpTitle}
                </DialogTitle>

                <DialogContent className="p-0">{renderComponent}</DialogContent>
            </Dialog>









        </div>

    );
};
