//react
import React, { useState, useEffect } from 'react';

//redux
import { useDispatch, useSelector } from "react-redux";

//dom route v6
import { Outlet } from "react-router-dom";

//style
import "./styles/table.css"

export default () => {
    //quizes array
    const { quizes } = useSelector(state => state.quizesSlices)

    //redux - dispatch
    const dispatch = useDispatch()


    useEffect(() => {
        console.log(quizes)
    }, [quizes])






    console.log(quizes)

    return (
        <>
            <div className="table-parent">


                <head>
                    <title>Table Example</title>
                </head>

                <table border="1">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Final</th>
                            <th>Create</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>Title 1</td>
                            <td>Description 1</td>
                            <td>Final 1</td>
                            <td><button>Create</button></td>
                            <td><button>Edit</button></td>
                        </tr>

                        <tr>
                            <td>Title 2</td>
                            <td>Description 2</td>
                            <td>Final 2</td>
                            <td><button>Create</button></td>
                            <td><button>Edit</button></td>
                        </tr>

                    </tbody>
                </table>




            </div>
            <Outlet />
        </>
    );
};