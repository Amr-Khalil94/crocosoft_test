import React, { useEffect, useState, useRef } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
// import {handleFormMode} from '../../../Store/projectsDetails/projectSlice'

//dom route
import { useNavigate } from "react-router-dom";

//mui
import { Button } from "@mui/material";

//sketlon
import Skeleton from "@mui/material/Skeleton";

//styles
import "./styles/tittleAndButt.css";
import "./styles/tittleAndButt-media.css";
import { openModal } from "../../../Store/modalSlice";

export default (props) => {
  const navigate = useNavigate()
  console.log(props.staticSpecificData);
  console.log(props);
  console.log(props.pageName);
  console.log(props.popUpName)
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

  const handleCreateBtt = () => {
    if (props.isLink) {

      navigate(`${props.navigateUrl}`)
      dispatch(handleFormMode({
        formMode: 'create',
        fillInputEditData: false,
      }))
    } else {
      dispatch(
        openModal({
          modalData: null,
          getDataArg: props.staticSpecificData.getDataArg,
          addDataArg: props.staticSpecificData.addDataArg,
          componentName: props.staticSpecificData.popUpName ? props.staticSpecificData.popUpName : props.pageName,
          modalType: "add",
          tittle: `Add ${props.staticSpecificData &&
            props.staticSpecificData.tittle
            }`,
        })
      );
    }
  }

  return (
    <div className="titleAndbutton-parent text-start row">
      <div className="titleAndbutton-cont mt-auto d-flex justify-content-between">
        {!props.isLoaded ? (
          Array(2).fill(
            <Skeleton className="App-tittle" width={200} height={60} />
          )
        ) : (
          <>
            <h1 className="App-tittle">{`${props.pageName}${props.subTitlle ? props.subTitlle : ""
              }`}</h1>

            <button
              className="add-row-butt createRow-butt"
              onClick={() => {
                handleCreateBtt()
              }}
            >
              Creates
            </button>
          </>
        )}
      </div>
    </div>
  );
};
