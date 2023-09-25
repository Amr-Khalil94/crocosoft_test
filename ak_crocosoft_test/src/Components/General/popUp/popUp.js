//react
import React, { useEffect } from "react";


//material ui
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

//redux
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../Store/modalSlice.js";

//components
import AddAndEditQuis from './addAndEditQuis_PopUp.js'

// //styles
import "./popUp.css";

export default () => {
    //redux
    const dispatch = useDispatch();
    const {
        isOpen,
        popUpTitle,
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
