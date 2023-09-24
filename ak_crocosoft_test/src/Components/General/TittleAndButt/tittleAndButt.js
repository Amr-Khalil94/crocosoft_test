import React, { useEffect, useState, useRef } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
// import {handleFormMode} from '../../../Store/projectsDetails/projectSlice'

//dom route
import { Outlet, useNavigate } from "react-router-dom";




//styles
// import { openModal } from "../../../Store/modalSlice";

export default (props) => {
  const navigate = useNavigate()
  //verify

  //useState

  //redux
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);

  //useEffect
  useEffect(() => {
    console.log(globalState);
  }, []);

  //useEffect

  // const handleCreateBtt = () => {
  //   if (props.isLink) {

  //     navigate(`${props.navigateUrl}`)
  //     dispatch(handleFormMode({
  //       formMode: 'create',
  //       fillInputEditData: false,
  //     }))
  //   } else {
  //     dispatch(
  //       openModal({
  //         modalData: null,
  //         getDataArg: props.staticSpecificData.getDataArg,
  //         addDataArg: props.staticSpecificData.addDataArg,
  //         componentName: props.staticSpecificData.popUpName ? props.staticSpecificData.popUpName : props.pageName,
  //         modalType: "add",
  //         tittle: `Add ${props.staticSpecificData &&
  //           props.staticSpecificData.tittle
  //           }`,
  //       })
  //     );
  //   }
  // }

  return (
    <div className="titleAndbutton-parent text-start row">
      <div className="titleAndbutton-cont mt-auto d-flex justify-content-between">

        <h1 className="App-tittle"></h1>

        <button
          className="add-row-butt createRow-butt"

          onClick={() => {
            // navigate(`quiz${quizID}`)
          }}
        >
          Creates
        </button>


      </div>
      <Outlet />
    </div>
  );
};
